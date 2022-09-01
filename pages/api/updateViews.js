import { doc, increment, updateDoc } from "firebase/firestore";
import { getFirebase } from "../../firebase/initFirebase";

export const updateViews = async (destination) => {
  const { database } = getFirebase();
  await updateDoc(doc(database, "destinations", destination), {
    views: increment(1),
  });
};
