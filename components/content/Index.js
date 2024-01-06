import React from "react";
import AboutUs from "components/layout/AboutUs";
import { PopularDestinations } from "components/layout/PopularDestinations";
import { SearchBarIndex } from "components/layout/SearchBarIndex";
import { Carousel } from "components/layout/Carousel";

const Index = () => {
  return (
    <>
      <Carousel />
      <SearchBarIndex />
      <PopularDestinations />
      <AboutUs />
    </>
  );
};

export default Index;
