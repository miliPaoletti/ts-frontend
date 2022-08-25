import React, { useEffect, useState } from "react";
import SearchBar from "components/ui/Search/SearchContainer";
import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { DropdownOrderBy } from "components/ui/Dropdown/DropdownOrderBy";
import { RESULTS_SEARCH } from "components/utils/constants";
import { filterListDestDolars } from "components/utils/renderHelpers";
import { filterListDestPesos } from "components/utils/renderHelpers";
import { sortPricesAsc } from "components/utils/renderHelpers";
import { sortPricesDesc } from "components/utils/renderHelpers";
const SearchContent = ({
  listDestinations,
  destination,
  month,
  months,
  destinationsNames,
}) => {
  const [dest, setDest] = useState(listDestinations);
  const [textDropdown, setTextDropdown] = useState("Ordernar por");
  const [visible, setVisible] = useState(RESULTS_SEARCH);

  useEffect(() => {
    setDest(listDestinations);
    setTextDropdown("Ordernar por");
  }, [listDestinations]);

  let lenDest = 0;
  if (listDestinations !== undefined) {
    lenDest = listDestinations.length;
  }

  const showMoreItems = (e) => {
    e.preventDefault();
    setVisible(visible + RESULTS_SEARCH);
  };

  const handleOrderAsc = () => {
    const sortedListDolars = sortPricesAsc(
      filterListDestDolars(listDestinations)
    );
    const sortedListPesos = sortPricesAsc(
      filterListDestPesos(listDestinations)
    );

    let listOrderAsc = sortedListPesos.concat(sortedListDolars);

    setDest([...listOrderAsc]);
    setTextDropdown("Precio asc");
  };

  const handleOrderDesc = () => {
    const sortedListDolars = sortPricesDesc(
      filterListDestDolars(listDestinations)
    );
    const sortedListPesos = sortPricesDesc(
      filterListDestPesos(listDestinations)
    );

    let listOrderDesc = sortedListDolars.concat(sortedListPesos);

    setDest([...listOrderDesc]);
    setTextDropdown("Precio desc");
  };

  const handleOrderName = () => {
    let listOrder = listDestinations.sort((a, b) =>
      a.props["title"].localeCompare(b.props["title"])
    );

    setDest([...listOrder]);
    setTextDropdown("Nombre");
  };
  let text = "Destinos";
  let text2 = "encontrados";
  if (lenDest === 1) {
    text = "Destino";
    text2 = "encontrado";
  }
  return (
    <div className="">
      <div className="items-center text-center relative">
        <div className="container-search"></div>
        <p className="top-[28%] lg:top-[40%] w-full font-medium text-2xl md:text-4xl text-white z-40 absolute remove-selection">
          ¿Buscás otro destino?
        </p>
        <SearchBar
          destinationsNames={destinationsNames}
          months={months}
          destination={destination}
          month={month}
        />
      </div>

      <div className="container-general  pb-8 md:pt-11">
        <div>
          <div className="mb-8 py-2 text-2xl w-full"></div>
          <TitlePrimary text={lenDest + " " + text} text2={text2} />

          {lenDest > 1 ? (
            <DropdownOrderBy
              handleOrderAsc={handleOrderAsc}
              handleOrderDesc={handleOrderDesc}
              handleOrderName={handleOrderName}
              text={textDropdown}
            />
          ) : (
            ""
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {dest?.slice(0, visible)}
          </div>
          {visible < lenDest ? (
            <div className="text-right pr-11">
              <button
                className="bg-orange-950 text-white p-4 rounded-xl hover:shadow-lg transition transform duration-200 ease-out font-semibold uppercase text-xl"
                onClick={showMoreItems}
              >
                Mostrar mas
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
