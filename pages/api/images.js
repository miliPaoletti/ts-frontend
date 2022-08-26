import { documentId, getDocs, query, where } from "firebase/firestore";

import { collectionRef, PATH_CUSTOM_INFO } from "./constants";

export const fetchDestinationsImages = async (destinations) => {
  return await Promise.all(
    destinations.map(async (destination) => {
      return fetchDestinationImages(destination);
    })
  );
};

export const fetchDestinationImages = async (destination) => {
  let list_destinations_names = destination["data"]["destinations_names"];

  let destination_title = destination["data"]["title"];
  let imgsDest = [];
  imgsDest = await Promise.all(
    list_destinations_names.map(async (dest) => {
      dest = dest.trim();
      if (!imgsDest.includes(dest)) {
        return fetchImage(dest);
      }
    })
  );
  let output = {};

  let dataFiltered = imgsDest.filter((item) => item !== undefined);
  output[destination_title] = [].concat.apply([], dataFiltered);

  return output;
};

export const fetchImage = async (title) => {
  const q = query(
    collectionRef(PATH_CUSTOM_INFO),
    where(documentId(), "==", title)
  );

  const snapshot = await getDocs(q);

  const images = snapshot.docs.map((doc) => {
    let obj = {};
    obj["destination_names"] = title;
    obj["data"] = doc.data();
    return obj;
  });

  return images[0];
};

export const transformListToDict = async (destinationsImages) => {
  let output = {};
  destinationsImages.map((elem) => {
    output[Object.keys(elem)[0]] = Object.values(elem)[0];
  });
  return output;
};
