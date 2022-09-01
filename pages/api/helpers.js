import {
  getDocsFromCache,
  getDocsFromServer,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { collectionRef, PATH_DESTINATIONS } from "./constants";

export const reFillDataFirestore = async (q, queryForServer) => {
  const snapshot = await getDocsFromCache(q);
  const lenSnapshot = snapshot.docs.length;
  if (lenSnapshot === 0) {
    console.log("entre a from server");
    snapshot = await getDocsFromServer(queryForServer);
    return snapshot;
  }
  const q2 = query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("ts", "desc"),
    limit(1)
  );
  const response = await getDocsFromCache(q2);
  const biggerTs = response.docs[0].data()["ts"];

  const date = new Date();
  const dateTs = new Date(biggerTs * 1000);

  var hours = Math.floor(Math.abs(date - dateTs) / 36e5);

  if (hours > 6) {
    console.log("entre al server");
    // recalcular
    snapshot = await getDocsFromServer(queryForServer);
    return snapshot;
  }

  return snapshot;
};
