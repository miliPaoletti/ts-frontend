import { collection, query } from "firebase/firestore";
import { getFirebase } from "../../firebase/initFirebase";

export const collectionRef = (path) => {
  const { database } = getFirebase();
  return collection(database, path);
};

export const PATH_CAROUSEL = "carousel";
export const PATH_CUSTOM_INFO = "custom_info";
export const PATH_DESTINATIONS = "destinations";
export const PATH_CREDENTIALS = "credentials";
// query all destinations
export const QUERY_DESTS = query(collectionRef(PATH_DESTINATIONS));
// // query all data in carousel
export const QUERY_ALL_CAROUSEL = query(collectionRef(PATH_CAROUSEL));
export const DESTINATIONS_RELATED = 3;
