import {
  ALL,
  BUSCAR,
  PATHNAMES,
  SEARCH_PAGE,
} from "components/utils/constants";
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
    <div className="search-bar-container">
      <div className="shadow-[0_0_15px_0px] shadow-orange-400">
        <div className="search-bar-container-input">
          <InputContainer
            content={
              <ListBoxSearch
                data={listDestinations}
                onChange={setSelectedDestination}
                separator={true}
                icon={<GoLocation className="icon" size={20} />}
                text={SEARCH_PAGE.firstInput}
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
                text={SEARCH_PAGE.secondInput}
                selected={selectedMonth}
              />
            }
          />
          <Link
            href={{
              pathname: PATHNAMES.search,
              query: { destination: selectedDestination, month: selectedMonth },
            }}
          >
            <a className="relative overflow-hidden z-30 w-full md:w-auto">
              <div className="button-search">{BUSCAR}</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
