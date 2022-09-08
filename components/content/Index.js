import React from "react";
import AboutUs from "components/layout/AboutUs";
import Slider from "components/ui/Carousel/Slider";
import { PopularDestinations } from "components/layout/PopularDestinations";
import { SearchBarIndex } from "components/layout/SearchBarIndex";

const Index = () => {
  return (
    <>
      <Slider />
      <SearchBarIndex />
      <PopularDestinations />
      <AboutUs />
    </>
  );
};

export default Index;
