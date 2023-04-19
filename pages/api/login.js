import { doc, getDocsFromServer, query, updateDoc } from "firebase/firestore";
import {
  PATH_CREDENTIALS,
  PATH_DESTINATIONS,
  collectionRef,
} from "./constants";
import { authFirestore } from "./helpers";
import { getFirebase } from "../../firebase/initFirebase";
import { getAllIdAndData } from "./destinations";

export const getCredentials = async () => {
  try {
    await authFirestore();
  } catch {
    window.location.href = "/500";
  }
  const q = query(collectionRef(PATH_CREDENTIALS));
  const snapshot = await getDocsFromServer(q);
  let ret = snapshot.docs.map((doc) => {
    return doc.data();
  });
  return ret;
};

export const updateDestinations = async (id, visibility) => {
  const { database } = getFirebase();
  await updateDoc(doc(database, "destinations", id), {
    visibility: visibility,
  });
};

export const fetchAllDestinationsAdmin = async () => {
  // get all destinations from firestore
  try {
    await authFirestore();
  } catch {
    window.location.href = "/500";
  }
  const q = query(collectionRef(PATH_DESTINATIONS));
  const snapshot = await getDocsFromServer(q);
  return getAllIdAndData(snapshot);
};
