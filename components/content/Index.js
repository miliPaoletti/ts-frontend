import { getData } from "components/utils/renderHelpers";
import { getImgsCarousel } from "pages/api/carousel";
import { fetchAllDestinations } from "pages/api/destinations";
import { fetchDestinationsNamesAndMonths } from "pages/api/destinations";
import { getMonths } from "pages/api/destinations";
import React, { useEffect, useState } from "react";
import { ALL } from "components/utils/constants";
import AboutUs from "components/layout/AboutUs";
import Slider from "components/ui/Carousel/Slider";
import SearchBar from "components/ui/Search/SearchContainer";
import TitlePrimary from "components/ui/Titles/TitlePrimary";

const Index = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);
  const [popularDest, setPopularDest] = useState([]);
  const [months, setMonths] = useState([]);
  const [destinationsNames, setDestinationsNames] = useState([]);

  useEffect(() => {
    // cambiar por fetchPopularDest cuando lu cambie para
    // que me de los valores
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

  return (
    <>
      <Slider sliderImage={imagesCarousel} />
      <SearchBar
        destinationsNames={destinationsNames}
        months={months}
        index={true}
        destination={ALL}
        month={ALL}
      />

      <div className="bg-gray-100">
        <div className="container-general md:pt-11">
          <section>
            <TitlePrimary text="Destinos " text2="Destacados" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {getData(popularDest)}
            </div>
          </section>
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default Index;
