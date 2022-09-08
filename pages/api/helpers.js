import {
  getDocsFromCache,
  getDocsFromServer,
  limit,
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
    snapshot = await getDocsFromServer(queryForServer);

    // save the time where the query was made to the server
    localStorage.setItem("timeQueryServer", new Date());

    return snapshot;
  }

  const date = new Date();
  let timeQueryServer = new Date(localStorage.getItem("timeQueryServer"));

  let hours = date.getHours() - timeQueryServer.getHours();
  if (hours > 3) {
    console.log("entre al server por horas");
    // recalcular

    const q3 = query(
      collectionRef(PATH_DESTINATIONS),
      where("timestamp", ">", localStorage.getItem("ts")),
      limit(1)
    );

    const snapshot2 = await getDocsFromServer(q3);
    if (snapshot2.length === 0) {
      // cambiar a diferente
      snapshot = await getDocsFromServer(queryForServer);
      localStorage.setItem("timeQueryServer", new Date());
      return snapshot;
    }
  }

  return snapshot;
};
