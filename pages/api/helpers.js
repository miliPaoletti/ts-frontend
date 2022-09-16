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
  const snapshot = await getDocsFromCache(q);
  const lenSnapshot = snapshot.docs.length;
  if (lenSnapshot === 0) {
    console.log("entre a from server len 0");
    snapshot = await getDocs(queryForServer);
    // save the time where the query was made to the server
    localStorage.setItem("timeQueryServer", new Date());

    return snapshot;
  }

  const date = new Date();
  let timeQueryServer = new Date(localStorage.getItem("timeQueryServer"));

  let hours = date.getHours() - timeQueryServer.getHours();

  // si pasaron 7 horas se recalcula hasta que cambie el tiempoen la base de datos
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
      snapshot = await getDocsFromServer(queryForServer);
      localStorage.setItem("timeQueryServer", new Date());
      return snapshot;
    }
  }

  return snapshot;
};
