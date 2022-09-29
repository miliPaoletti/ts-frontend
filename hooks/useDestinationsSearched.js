import { DROPDOWN, RESULTS_SEARCH } from "components/utils/constants";
import {
  filterListDestDolars,
  filterListDestPesos,
  getMediumCards,
  sortByPromotionsAndViews,
  sortPricesAsc,
  sortPricesDesc,
} from "components/utils/renderHelpers";
import { useRouter } from "next/router";
import { getSpecificDestination } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const useDestinationsSearched = () => {
  const [listDestinations, setDestinations] = useState([]);

  const [dest, setDest] = useState(listDestinations);
  const [textDropdown, setTextDropdown] = useState(DROPDOWN.orderBy);
  const [visible, setVisible] = useState(RESULTS_SEARCH);

  const { query } = useRouter();

  useEffect(() => {
    if (Object.keys(query).length !== 0) {
      getSpecificDestination(query.month, query.destination).then((val) => {
        setDestinations(getMediumCards(val));
      });
    }
  }, [query]);

  useEffect(() => {
    setDest(sortByPromotionsAndViews(listDestinations));
    setTextDropdown(DROPDOWN.populars);
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
    setTextDropdown(DROPDOWN.asc);
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
    setTextDropdown(DROPDOWN.desc);
  };

  const handleOrderName = () => {
    let listOrder = sortByPromotionsAndViews(listDestinations);
    setDest([...listOrder]);
    setTextDropdown(DROPDOWN.populars);
  };
  return {
    lenDest,
    dest,
    visible,
    handleOrderAsc,
    handleOrderDesc,
    handleOrderName,
    textDropdown,
    showMoreItems,
  };
};
