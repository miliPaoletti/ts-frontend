import { getAuth, signInAnonymously } from "firebase/auth";
import {
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { collectionRef, PATH_DESTINATIONS } from "./constants";

export const reFillDataFirestore = async (q, queryForServer) => {
  // get the data from cache
  const auth = getAuth();

  await signInAnonymously(auth);
  const snapshot = await getDocsFromCache(q);
  const lenSnapshot = snapshot.docs.length;

  if (lenSnapshot === 0) {
    console.log("entre a from server len 0");
    await getDocsFromServer(queryForServer);
    // save the time where the query was made to the server
    localStorage.setItem("timeQueryServer", new Date());
    const snapshot = await getDocsFromCache(q);
    return snapshot;
  }

  const date = new Date();
  let timeQueryServer = new Date(localStorage.getItem("timeQueryServer"));
  let hours = Math.abs(date.getTime() - timeQueryServer.getTime()) / 3600000;

  if (hours > 3) {
    console.log("entre a horas mayor a 3");
    // recalcular
    const q2 = query(
      collectionRef(PATH_DESTINATIONS),
      orderBy("ts", "desc"),
      limit(1)
    );
    const response = await getDocsFromServer(q2);
    const biggerTs = response.docs[0].data()["ts"];
    const dateTs = new Date(biggerTs * 1000);

    const q3 = query(
      collectionRef(PATH_DESTINATIONS),
      where("timestamp", ">", dateTs),
      limit(1)
    );

    const snapshot2 = await getDocsFromServer(q3);
    if (snapshot2.length !== 0) {
      console.log("cambiaron los ts");
      await getDocsFromServer(queryForServer);
      localStorage.setItem("timeQueryServer", new Date());
      const snapshot = await getDocsFromCache(q);
      return snapshot;
    }
  }

  return snapshot;
};

export const getUniques = (arr) => {
  // get uniques values from an array of objects

  return Array.from(new Set(arr.map((a) => a.id))).map((id) => {
    return arr.find((a) => a.id === id);
  });
};
