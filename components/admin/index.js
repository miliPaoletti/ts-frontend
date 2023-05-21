import Destination from "./Destination";
import { useCallback, useEffect, useState } from "react";
import { fetchAllDestinationsAdmin } from "pages/api/login";
import {
  sortByName,
  sortByVisibility,
  sortByVisibilityFalse,
  sortByVisibilityTrue,
} from "components/utils/renderHelpers";
import { DropdownAdmin } from "components/ui/Dropdown/DropdownAdmin";
import { DROPDOWN_ADMIN } from "components/utils/constants";

const ControlPanel = () => {
  const [destinations, setDestinations] = useState([]);
  const [textDropdown, setTextDropdown] = useState(DROPDOWN_ADMIN.orderBy);
  useEffect(() => {
    // get destinations and sort them by name by default
    fetchAllDestinationsAdmin().then((allDest) => {
      setDestinations(sortByName(allDest));
    });
  }, []);

  const handleVisibilityTrue = useCallback(() => {
    // get destinations and sort them by visibility true
    const sorted = sortByVisibilityTrue(sortByName(destinations));

    setDestinations([...sorted]);
    setTextDropdown(DROPDOWN_ADMIN.visibility_true);
  }, [destinations]);

  const handleVisibilityFalse = useCallback(() => {
    // get destinations and sort them by visibility false
    const sorted = sortByVisibilityFalse(sortByName(destinations));

    setDestinations([...sorted]);
    setTextDropdown(DROPDOWN_ADMIN.visibility_false);
  }, [destinations]);

  const handleByName = useCallback(() => {
    // get destinations and sort them by name
    const sorted = sortByName(destinations);
    setDestinations([...sorted]);
    setTextDropdown(DROPDOWN_ADMIN.name);
  }, [destinations]);

  const drawDest = useCallback(() => {
    return destinations.map((item) => {
      return <Destination key={item.id} item={item} />;
    });
  }, [destinations]);
  return (
    <div>
      <p className="my-10 text-center">
        Estos son todos los destinos. Si el{" "}
        <span className="font-bold">check</span> de{" "}
        <span className="font-bold">Mostrar</span> esta marcado el destino se
        muestra, sino no.
      </p>
      <DropdownAdmin
        handleVisibilityFalse={handleVisibilityFalse}
        handleVisibilityTrue={handleVisibilityTrue}
        handleByName={handleByName}
        text={textDropdown}
      />
      <div className="grid grid-cols-3 gap-5 px-3">{drawDest()}</div>
    </div>
  );
};

export default ControlPanel;
