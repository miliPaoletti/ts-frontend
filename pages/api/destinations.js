import { ALL } from "components/utils/constants";
import { orderObject, sortByMonth } from "components/utils/renderHelpers";
import { documentId, limit, orderBy, query, where } from "firebase/firestore";
import { collectionRef, PATH_DESTINATIONS, QUERY_ALL_DEST } from "./constants";
import { reFillDataFirestore } from "./helpers";

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
  const q = query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("promotions", "asc"),
    orderBy("views", "desc")
  );

  const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);

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
  if (month === undefined || destination === undefined) {
    return ret;
  } else if (month === ALL && destination === ALL) {
    const q = query(collectionRef(PATH_DESTINATIONS));
    snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);

    ret = getAllIdAndData(snapshot);
  } else if (month !== ALL && destination !== ALL) {
    if (month !== undefined) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("departures", "array-contains", month)
      );

      const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);

      let resultado_final = [];
      snapshot.docs.map((doc) => {
        let destinationsNames = doc.data()["destinations_names"];

        if (destinationsNames.includes(destination.toLowerCase())) {
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
      const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);
      ret = getAllIdAndData(snapshot);
    }
  } else {
    if (destination !== ALL) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("destinations_names", "array-contains", destination)
      );
      const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);
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

    const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);

    return getAllIdAndData(snapshot);
  }
};

export const fetchDestRelated = async (departures, title) => {
  if (departures.length !== 0 && title !== undefined) {
    const q = query(
      collectionRef(PATH_DESTINATIONS),
      orderBy("title", "desc"),
      where("departures", "array-contains-any", departures),
      where("title", "!=", title),
      orderBy("views", "desc"),
      limit(3)
    );

    const snapshot = await reFillDataFirestore(q, QUERY_ALL_DEST);

    return getAllIdAndData(snapshot);
  }
};
