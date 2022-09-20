import { ALL } from "components/utils/constants";
import { sortByMonth } from "components/utils/renderHelpers";
import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { GoCalendar } from "react-icons/go";
import InputContainer from "components/ui/Search/InputContainer";
import ListBoxSearch from "components/ui/Search/ListBoxSearch";
import Link from "next/link";

const getDestinationNames = (destinations) => {
  return Object.keys(destinations);
};

const getMonthsOfDest = (destinations, destination) => {
  let months = [];
  let todos = [ALL];
  let result_months = destinations[destination];

  months = todos.concat(sortByMonth(result_months));
  return months;
};

const SearchBar = ({ destinationsNames, months, destination, month }) => {
  const [selectedDestination, setSelectedDestination] = useState(destination);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const [listDestinations, setListDestinations] = useState([destination]);
  const [listMonths, setListMonths] = useState([month]);

  useEffect(() => {
    setSelectedDestination(destination);
  }, [destination]);

  useEffect(() => {
    setSelectedMonth(month);
  }, [month]);

  useEffect(() => {
    setListDestinations(getDestinationNames(destinationsNames));

    if (selectedDestination !== ALL) {
      setListMonths(getMonthsOfDest(destinationsNames, selectedDestination));
    } else {
      setListMonths(months);
    }
  }, [selectedDestination, months, destinationsNames]);

  return (
    <div className="relative mt-0 md:flex md:items-center md:justify-center md:w-full md:left-0 z-[100] md:mt-[-120px]">
      <div className=" shadow-[0_0_15px_0px] shadow-orange-400">
        <div className="flex flex-col md:flex-row items-center md:mx-auto md:bg-white">
          <InputContainer
            content={
              <ListBoxSearch
                data={listDestinations}
                onChange={setSelectedDestination}
                separator={true}
                icon={<GoLocation className="icon" size={20} />}
                text="Destino"
                selected={selectedDestination}
                updateMonths={setSelectedMonth}
              />
            }
          />

          <InputContainer
            content={
              <ListBoxSearch
                data={listMonths}
                onChange={setSelectedMonth}
                icon={<GoCalendar className="icon" size={20} />}
                text="Mes"
                selected={selectedMonth}
              />
            }
          />
          <Link
            href={{
              pathname: "search",
              query: { destination: selectedDestination, month: selectedMonth },
            }}
          >
            <a className="relative overflow-hidden z-30 w-full md:w-auto">
              <div className="uppercase text-center p-3 md:p-5 text-sm md:text-xl text-white font-bold bg-orange-950 md:bg-transparent w-full md:w-auto md:before:-z-50 md:before:content-[''] md:before:absolute md:before:right-[-6px] md:before:top-0 md:before:h-full md:before:w-full md:before:-skew-x-6 md:before:bg-orange-950 remove-selection">
                buscar
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
