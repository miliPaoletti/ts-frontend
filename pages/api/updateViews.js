import { doc, increment, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/initFirebase";

export const updateViews = async (destination) => {
  await updateDoc(doc(database, "destinations", destination), {
    views: increment(1),
  });
};
