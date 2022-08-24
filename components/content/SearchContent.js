import React, { useEffect, useState } from "react";
import SearchBar from "components/ui/Search/SearchContainer";
import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { DropdownOrderBy } from "components/ui/Dropdown/DropdownOrderBy";
const SearchContent = ({
  list_destinations,
  showMoreItems,
  visible,
  destination,
  month,
  months,
  destinationsNames,
}) => {
  const [dest, setDest] = useState(list_destinations);
  const [textDropdown, setTextDropdown] = useState("Ordernar por");

  useEffect(() => {
    setDest(list_destinations);
    setTextDropdown("Ordernar por");
  }, [list_destinations]);

  let len_dest = 0;
  if (list_destinations !== undefined) {
    len_dest = list_destinations.length;
  }

  const handleOrderAsc = () => {
    let list_order_desc = list_destinations.sort(
      (a, b) => parseFloat(a.props["price"]) - parseFloat(b.props["price"])
    );
    setDest([...list_order_desc]);
    setTextDropdown("Precio asc");
  };

  const handleOrderDesc = () => {
    let list_order_desc = list_destinations.sort(
      (a, b) => parseFloat(b.props["price"]) - parseFloat(a.props["price"])
    );
    setDest([...list_order_desc]);
    setTextDropdown("Precio desc");
  };

  const handleOrderName = () => {
    let list_order = list_destinations.sort((a, b) =>
      a.props["title"].localeCompare(b.props["title"])
    );

    setDest([...list_order]);
    setTextDropdown("Nombre");
  };
  let text = "Destinos";
  let text2 = "encontrados";
  if (len_dest === 1) {
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

      <div className="container-general flex pb-8 px-5 lg:px-0 md:pt-11">
        <div>
          <div className="mb-8 py-2 text-2xl w-full"></div>
          <TitlePrimary text={len_dest + " " + text} text2={text2} />

          {len_dest > 1 ? (
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
          {visible < len_dest ? (
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
