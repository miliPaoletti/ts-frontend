import { getDocs } from "firebase/firestore";
import { collectionRef, PATH_CAROUSEL } from "./constants";

export const getImgsCarousel = async () => {
  const snapshot = await getDocs(collectionRef(PATH_CAROUSEL));

  let ret = snapshot.docs.map((doc) => {
    return doc.data();
  });
  return ret;
};
