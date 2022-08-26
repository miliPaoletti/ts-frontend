import { useEffect, useState } from "react";
import Template from "components/layout/Template";
import { useRouter } from "next/router";
import SearchContent from "components/content/SearchContent";
import { fetchAllDestinations } from "./api/destinations";
import { fetchDestinationsNamesAndMonths } from "./api/destinations";
import { getMonths } from "./api/destinations";
import { getSpecificDestination } from "./api/destinations";
import { fetchDestinationsImages, transformListToDict } from "./api/images";
import { getData } from "components/utils/renderHelpers";

function Search() {
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
          listDestinations={getData(destinations, destinationImages)}
          destination={destination}
          month={month}
          months={months}
          destinationsNames={destinationsNames}
        />
      }
      title="Turismo Serrano"
    />
  );
}
export default Search;
