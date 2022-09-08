import SearchBar from "components/ui/Search/SearchContainer";
import { useRouter } from "next/router";
import { fetchAllDestinations } from "pages/api/destinations";
import { fetchDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const SearchBarDestination = () => {
  const { query, isReady } = useRouter();
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    if (!isReady) return;
    else {
      setDestination(query.destination);
      setMonth(query.month);
    }
  }, [isReady, query.destination, query.month]);

  useEffect(() => {
    fetchAllDestinations().then((allDest) => {
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, fetchDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);

  return (
    <div className="items-center text-center relative">
      <div className="container-search"></div>
      <p className="top-[28%] lg:top-[40%] w-full font-medium text-2xl md:text-4xl text-white z-40 absolute remove-selection">
        ¿Buscás otro destino?
      </p>
      <SearchBar
        destinationsNames={destinationsNames}
        months={months}
        destination={destination}
        month={month}
      />
    </div>
  );
};
