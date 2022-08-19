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
  const snapshot = await getDocs(collectionRef(PATH_DESTINATIONS));

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
