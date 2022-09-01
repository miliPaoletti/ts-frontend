import { query } from "firebase/firestore";
import { collectionRef, PATH_CAROUSEL, QUERY_ALL_CAROUSEL } from "./constants";
import { reFillDataFirestore } from "./helpers";

export const getImgsCarousel = async () => {
  const q = query(collectionRef(PATH_CAROUSEL));
  const snapshot = await reFillDataFirestore(q, QUERY_ALL_CAROUSEL);

  let ret = snapshot.docs.map((doc) => {
    return doc.data();
  });
  return ret;
};
