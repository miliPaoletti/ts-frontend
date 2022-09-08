import SearchBar from "components/ui/Search/SearchContainer";
import { ALL } from "components/utils/constants";
import { fetchAllDestinations } from "pages/api/destinations";
import { fetchDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const SearchBarIndex = () => {
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    fetchAllDestinations().then((allDest) => {
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, fetchDestinationsNamesAndMonths(allDest))
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
