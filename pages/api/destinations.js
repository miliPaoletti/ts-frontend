import { ALL } from "components/utils/constants";
import { orderObject, sortByMonth } from "components/utils/renderHelpers";
import {
  documentId,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { collectionRef, PATH_DESTINATIONS } from "./constants";

const getAllIdAndData = (snapshot) => {
  let ret = snapshot.docs.map((doc) => {
    let obj = {};
    obj["id"] = doc.id;
    obj["data"] = doc.data();
    return obj;
  });
  return ret;
};

export const fetchAllDestinations = async () => {
  const q = query(collectionRef(PATH_DESTINATIONS), orderBy("views", "desc"));

  const snapshot = await getDocs(q);

  return getAllIdAndData(snapshot);
};

export const getMonths = (destinations) => {
  let arrMonths = [];

  destinations.map((destination) => {
    let departures = destination["data"]["departures"];
    if (departures !== undefined) {
      departures.map((departure) => {
        if (!arrMonths.includes(departure)) {
          // only runs if value not in array
          arrMonths.push(departure);
        }
      });
    }
  });
  sortByMonth(arrMonths);
  arrMonths.unshift(ALL);
  return arrMonths;
};

export const fetchDestinationsNamesAndMonths = (destinations) => {
  let obj = {};
  destinations?.map((destination) => {
    let destinations_names = destination["data"]["destinations_names"];
    let months = destination["data"]["departures"];

    destinations_names.map((item) => {
      if (item in obj) {
        obj[item] = months.concat(obj[item]);
      } else {
        obj[item] = months;
      }
    });
  });

  for (const key in obj) {
    // elimina los repetidos
    obj[key] = [...new Set(obj[key])];
  }

  return orderObject(obj);
};

export const getSpecificDestination = async (month, destination) => {
  let snapshot = [];
  let ret = [];
  if (month === ALL && destination === ALL) {
    snapshot = await getDocs(collectionRef(PATH_DESTINATIONS));
    ret = getAllIdAndData(snapshot);
  } else if (month !== ALL && destination !== ALL) {
    if (month !== undefined) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("departures", "array-contains", month)
      );

      const snapshot = await getDocs(q);

      let resultado_final = [];
      snapshot.docs.map((doc) => {
        let title = doc.data()["title"];
        if (title.toLowerCase().includes(destination.toLowerCase())) {
          let obj = {};
          obj["id"] = doc.id;
          obj["data"] = doc.data();
          resultado_final.push(obj);
        }

        return resultado_final;
      });
      ret = resultado_final;
    }
  } else if (month !== ALL) {
    if (month !== undefined) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("departures", "array-contains", month)
      );
      const snapshot = await getDocs(q);
      ret = getAllIdAndData(snapshot);
    }
  } else {
    if (month !== destination) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("destinations_names", "array-contains", destination)
      );
      const snapshot = await getDocs(q);
      ret = getAllIdAndData(snapshot);
    }
  }
  return ret;
};

export const fetchDestDocumentId = async (title) => {
  if (title.length !== 0) {
    const q = query(
      collectionRef(PATH_DESTINATIONS),
      where(documentId(), "==", title)
    );

    const snapshot = await getDocs(q);

    return getAllIdAndData(snapshot);
  }
};

export const fetchDestRelated = async (destinationsNames) => {
  if (destinationsNames.length !== 0) {
    const q = query(
      collectionRef(PATH_DESTINATIONS),
      where("destinations_names", "array-contains-any", destinationsNames),
      limit(4)
    );

    const snapshot = await getDocs(q);

    return getAllIdAndData(snapshot);
  }
};
