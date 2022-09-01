import { getImgsCarousel } from "pages/api/carousel";
import { fetchAllDestinations } from "pages/api/destinations";
import { fetchDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const useIndexData = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);
  const [popularDest, setPopularDest] = useState([]);
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    fetchAllDestinations().then((allDest) => {
      let popular = allDest.slice(0, 6);
      setPopularDest(popular);
      setMonths(getMonths(allDest));
      setDestinationsNames(
        Object.assign({ todos: [1] }, fetchDestinationsNamesAndMonths(allDest))
      );
    });
  }, []);

  useEffect(() => {
    getImgsCarousel().then(setImagesCarousel);
  }, []);
  return { imagesCarousel, popularDest, months, destinationsNames };
};
