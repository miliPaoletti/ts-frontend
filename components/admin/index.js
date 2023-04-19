import Destination from "./Destination";
import { useCallback, useEffect, useState } from "react";
import { fetchAllDestinationsAdmin } from "pages/api/login";

const ControlPanel = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // get months and destinations to show in searchbar
    fetchAllDestinationsAdmin().then((allDest) => {
      setDestinations(allDest);
    });
  }, []);

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
      <div className="grid grid-cols-3 gap-5 px-3">{drawDest()}</div>
    </div>
  );
};

export default ControlPanel;
