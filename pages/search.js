import { useEffect, useState } from "react";
import Template from "components/layout/Template";
import { useRouter } from "next/router";
import { RESULTS_SEARCH } from "components/utils/constants";
import SearchContent from "components/content/SearchContent";
import {
  fetchAllDestinations,
  fetchDestinationsNamesAndMonths,
  getMonths,
  getSpecificDestination,
} from "./api/destinations";
import { fetchDestinationsImages, transformListToDict } from "./api/images";
import { getData } from "components/utils/renderHelpers";

function Search() {
  const [visible, setVisible] = useState(RESULTS_SEARCH);

  const { query, isReady } = useRouter();
  const [destination, setDestination] = useState("");
  //   const router = useRouter();
  useEffect(() => {
    if (!isReady) return;
    else {
      setDestination(query.destination);
    }
    // codes using router.query
  }, [isReady, query.destination]);

  const showMoreItems = () => {
    setVisible(visible + RESULTS_SEARCH);
  };

  const [destinations, setDestinations] = useState([]);
  const [destinationImages, setDestinationImages] = useState([]);
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    getSpecificDestination(query.month, query.destination).then(
      setDestinations
    );
  }, [query]);

  useEffect(() => {
    fetchDestinationsImages(destinations).then((val) => {
      transformListToDict(val).then((resp) => {
        setDestinationImages(resp);
      });
    });
  }, [destinations]);

  useEffect(() => {
    fetchAllDestinations().then((allDest) => {
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, fetchDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);

  return (
    <Template
      content={
        <SearchContent
          list_destinations={getData(destinations, destinationImages)}
          showMoreItems={showMoreItems}
          destination={destination}
          month={"todos"}
          visible={visible}
          months={months}
          destinationsNames={destinationsNames}
        />
      }
    />
  );
}
export default Search;
