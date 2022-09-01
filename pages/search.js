import Template from "components/layout/Template";
import SearchContent from "components/content/SearchContent";
import { getData } from "components/utils/renderHelpers";
import { useSearchData } from "hooks/useSearchData";

function Search() {
  const { destinations, destination, month, months, destinationsNames } =
    useSearchData();

  return (
    <Template
      content={
        <SearchContent
          listDestinations={getData(destinations)}
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
