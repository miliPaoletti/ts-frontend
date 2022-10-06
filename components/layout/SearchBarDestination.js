import SearchBar from "components/ui/Search/SearchContainer";
import { SEARCH_PAGE } from "components/utils/constants";
import { useRouter } from "next/router";
import { fetchAllDestinations } from "pages/api/destinations";
import { getDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const SearchBarDestination = () => {
  const { query, isReady } = useRouter();
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    // get destination and month from url (web)
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
        Object.assign({ todos: [1] }, getDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);

  return (
    <div className="items-center text-center relative">
      <div className="container-search">
        <p className="container-search-text">{SEARCH_PAGE.textBanner}</p>
      </div>
      <SearchBar
        destinationsNames={destinationsNames}
        months={months}
        destination={destination}
        month={month}
      />
    </div>
  );
};
