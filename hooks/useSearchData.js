import { useRouter } from "next/router";
import { fetchAllDestinations } from "pages/api/destinations";
import { fetchDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { getSpecificDestination } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const useSearchData = () => {
  const { query, isReady } = useRouter();
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  useEffect(() => {
    if (!isReady) return;
    else {
      setDestination(query.destination);
      setMonth(query.month);
    }
  }, [isReady, query.destination, query.month]);

  const [destinations, setDestinations] = useState([]);
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    getSpecificDestination(query.month, query.destination).then(
      setDestinations
    );
  }, [query]);

  useEffect(() => {
    fetchAllDestinations().then((allDest) => {
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, fetchDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);
  return { destinations, destination, month, months, destinationsNames };
};
