import { DropdownOrderBy } from "components/ui/Dropdown/DropdownOrderBy";
import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { useDestinationsSearched } from "hooks/useDestinationsSearched";

export const DestinationSearched = () => {
  const {
    lenDest,
    dest,
    visible,
    handleOrderAsc,
    handleOrderDesc,
    handleOrderName,
    textDropdown,
    showMoreItems,
  } = useDestinationsSearched();

  let text = "Destinos";
  let text2 = "encontrados";
  if (lenDest === 1) {
    text = "Destino";
    text2 = "encontrado";
  }

  return (
    <div className="container-general  pb-8 md:pt-11">
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
  );
};