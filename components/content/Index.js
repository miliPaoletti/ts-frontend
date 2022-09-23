import React from "react";
import AboutUs from "components/layout/AboutUs";
import { PopularDestinations } from "components/layout/PopularDestinations";
import { SearchBarIndex } from "components/layout/SearchBarIndex";
import { SliderIndex } from "components/layout/SliderIndex";

const Index = () => {
  return (
    <>
      <SliderIndex />
      <SearchBarIndex />
      <PopularDestinations />
      <AboutUs />
    </>
  );
};

export default Index;
