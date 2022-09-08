import React from "react";

import { SearchBarDestination } from "components/layout/SearchBarDestination";
import { DestinationSearched } from "components/layout/DestinationsSearched";
const SearchContent = () => {
  return (
    <>
      <SearchBarDestination />
      <DestinationSearched />
    </>
  );
};

export default SearchContent;
