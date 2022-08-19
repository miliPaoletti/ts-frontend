import { collection } from "firebase/firestore";
import { database } from "../../firebase/initFirebase";

export const collectionRef = (path) => {
  return collection(database, path);
};

export const PATH_CAROUSEL = "carousel";
export const PATH_CUSTOM_INFO = "custom_info";
export const PATH_DESTINATIONS = "destinations";
