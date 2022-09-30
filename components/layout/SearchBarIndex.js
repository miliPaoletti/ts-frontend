import SearchBar from "components/ui/Search/SearchContainer";
import { ALL } from "components/utils/constants";
import { fetchAllDestinations } from "pages/api/destinations";
import { getDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const SearchBarIndex = () => {
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    // get months and destinations to show in searchbar
    fetchAllDestinations().then((allDest) => {
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, getDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);

  return (
    <SearchBar
      destinationsNames={destinationsNames}
      months={months}
      index={true}
      destination={ALL}
      month={ALL}
    />
  );
};
