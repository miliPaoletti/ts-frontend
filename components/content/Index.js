import { getData } from "components/utils/renderHelpers";
import React from "react";
import { ALL } from "components/utils/constants";
import AboutUs from "components/layout/AboutUs";
import Slider from "components/ui/Carousel/Slider";
import SearchBar from "components/ui/Search/SearchContainer";
import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { useIndexData } from "hooks/useIndexData";

const Index = () => {
  const { imagesCarousel, popularDest, months, destinationsNames } =
    useIndexData();

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
