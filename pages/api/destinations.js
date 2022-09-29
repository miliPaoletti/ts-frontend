import { ALL } from "components/utils/constants";
import { orderObject, sortByMonth } from "components/utils/renderHelpers";
import { documentId, limit, orderBy, query, where } from "firebase/firestore";
import {
  collectionRef,
  DESTINATIONS_RELATED,
  PATH_DESTINATIONS,
  QUERY_DESTS,
} from "./constants";
import { getUniques, reFillDataFirestore } from "./helpers";

const getAllIdAndData = (snapshot) => {
  let ret = snapshot.docs.map((doc) => {
    let obj = {};
    obj["id"] = doc.id;
    obj["data"] = doc.data();
    return obj;
  });
  return ret;
};

export const fetchPopularDestinations = async () => {
  const q = query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("promotions", "asc"),
    orderBy("views", "desc"),
    limit(6)
  );

  const snapshot = await reFillDataFirestore(q, QUERY_DESTS);

  return getAllIdAndData(snapshot);
};

export const fetchAllDestinations = async () => {
  // get all destinations from firestore
  const q = query(collectionRef(PATH_DESTINATIONS));
  const snapshot = await reFillDataFirestore(q, QUERY_DESTS);

  return getAllIdAndData(snapshot);
};

export const getMonths = (destinations) => {
  // from all the destinations available, returns
  // an array with all the months (Order as: january ... december)
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
  // add ALL to the first position of the array
  arrMonths.unshift(ALL);
  return arrMonths;
};

export const getDestinationsNamesAndMonths = (destinations) => {
  // obj with all the destinations and months related to those dest.
  let obj = {};
  destinations?.map((destination) => {
    let destinations_names = destination["data"]["destinations_names"];
    let months = [];
    let departures = destination["data"]["departures"];
    if (departures !== undefined) {
      months = departures;
    }

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
    snapshot = await reFillDataFirestore(q, QUERY_DESTS);

    ret = getAllIdAndData(snapshot);
  } else if (month !== ALL && destination !== ALL) {
    if (month !== undefined) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("departures", "array-contains", month)
      );

      const snapshot = await reFillDataFirestore(q, QUERY_DESTS);

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
      const snapshot = await reFillDataFirestore(q, QUERY_DESTS);
      ret = getAllIdAndData(snapshot);
    }
  } else {
    if (destination !== ALL) {
      const q = query(
        collectionRef(PATH_DESTINATIONS),
        where("destinations_names", "array-contains", destination)
      );
      const snapshot = await reFillDataFirestore(q, QUERY_DESTS);
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

    const snapshot = await reFillDataFirestore(q, QUERY_DESTS);

    return getAllIdAndData(snapshot);
  }
};

const getQueryDestinationsNames = (destinationsNames, title) => {
  return query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("title", "desc"),
    where("destinations_names", "array-contains-any", destinationsNames),
    where("title", "!=", title),
    orderBy("views", "desc"),
    limit(3)
  );
};

const getQueryDepartures = (departures, title, lenSnapshot) => {
  return query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("title", "desc"),
    where("departures", "array-contains-any", departures),
    where("title", "!=", title),
    orderBy("views", "desc"),
    limit(3 - lenSnapshot)
  );
};

const getQueryByPromotionsAndViews = (title) => {
  return query(
    collectionRef(PATH_DESTINATIONS),
    orderBy("title", "desc"),
    where("title", "!=", title),
    orderBy("promotions", "asc"),
    orderBy("views", "desc"),
    limit(3)
  );
};

export const fetchDestRelated = async (
  departures,
  title,
  destinationsNames
) => {
  if (departures.length !== 0 && title !== undefined) {
    // get destinations related for the same destinations names
    const queryDestsNames = getQueryDestinationsNames(destinationsNames, title);

    const snapshot = await reFillDataFirestore(queryDestsNames, QUERY_DESTS);

    const lenSnapshot = snapshot.docs.length;

    if (lenSnapshot >= DESTINATIONS_RELATED) {
      // Returns 3 destinations related based on destinations names
      return getAllIdAndData(snapshot).slice(0, DESTINATIONS_RELATED);
    }

    // Get destinations related that are missing (we need x amount)
    // Get destinations related based on similar Departures
    const queryDepartures = getQueryDepartures(departures, title, lenSnapshot);

    const snapshot2 = await reFillDataFirestore(queryDepartures, QUERY_DESTS);

    // unir los dos arreglos
    let snapshot1Data = getAllIdAndData(snapshot);
    let snapshot2Data = getAllIdAndData(snapshot2);
    let snapshotsDestNamesAndDep = snapshot1Data.concat(snapshot2Data);
    // delete repeats
    const uniqueDestNamesAndDep = getUniques(snapshotsDestNamesAndDep);

    const lengthUnique = uniqueDestNamesAndDep.length;

    if (lengthUnique >= DESTINATIONS_RELATED) {
      // Returns 3 destinations related based on departures
      return uniqueDestNamesAndDep.slice(0, DESTINATIONS_RELATED);
    }

    // Get destinations related that are missing (we need x amount)
    // Get destinations related based on most promotions and/or views
    const queryPromAndViews = getQueryByPromotionsAndViews(title);

    const snapshot3 = await reFillDataFirestore(queryPromAndViews, QUERY_DESTS);

    let snapshot3Data = getAllIdAndData(snapshot3);
    let snapshotWithAll = snapshotsDestNamesAndDep.concat(snapshot3Data);
    return snapshotWithAll.slice(0, DESTINATIONS_RELATED);
  }
};
