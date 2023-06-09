import { getAuth, signInAnonymously } from "firebase/auth";
import {
  getDocsFromCache,
  getDocsFromServer,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { collectionRef, PATH_DESTINATIONS } from "./constants";

const TS = "ts";
export const TIME_QUERY_SERVER = "timeQueryServer";

export const authFirestore = async () => {
  const auth = getAuth();
  await signInAnonymously(auth);
};

const getDataFromServer = async (q, queryForServer) => {
  await getDocsFromServer(queryForServer);
  // save the time where the query was made to the server
  localStorage.setItem(TIME_QUERY_SERVER, new Date());
  const snapshot = await getDocsFromCache(q);
  return snapshot;
};

const lastTimeQueryServer = () => {
  const date = new Date();
  let timeQueryServer = new Date(localStorage.getItem(TIME_QUERY_SERVER));
  let hours = Math.abs(date.getTime() - timeQueryServer.getTime()) / 3600000;
  return hours;
};

const getBiggestTsFromServer = async () => {
  const q2 = query(
    collectionRef(PATH_DESTINATIONS),
    where("visibility", "==", true),
    orderBy(TS, "desc"),
    limit(1)
  );
  const response = await getDocsFromServer(q2);
  const biggerTs = response.docs[0].data()[TS];
  return new Date(biggerTs * 1000);
};

const isTimestampUpdated = async (dateTs) => {
  const q3 = query(
    collectionRef(PATH_DESTINATIONS),
    where("timestamp", ">", dateTs),
    where("visibility", "==", true),
    limit(1)
  );

  const snapshot = await getDocsFromServer(q3);
  if (snapshot.length !== 0) {
    return true;
  }
  return false;
};

export const reFillDataFirestore = async (q, queryForServer) => {
  // get the data from cache
  try {
    await authFirestore();
  } catch {
    window.location.href = "/500";
  }

  const snapshot = await getDocsFromCache(q);
  const lenSnapshot = snapshot.docs.length;

  if (lenSnapshot === 0) {
    return getDataFromServer(q, queryForServer);
  }

  if (lastTimeQueryServer() > 3) {
    // recalcular
    // pido el ts mas grande els erver
    let dateTs = await getBiggestTsFromServer();
    // pme fijo si uno cambio, y si cambio, pido todos de nuevo y actualizo

    let tsChanged = await isTimestampUpdated(dateTs);
    if (tsChanged) {
      return getDataFromServer(q, queryForServer);
    } else {
      localStorage.setItem(TIME_QUERY_SERVER, new Date());
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
