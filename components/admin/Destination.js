import { updateDestinations } from "pages/api/login";
import { useCallback, useState } from "react";

const Destination = ({ item }) => {
  const [active, setActive] = useState(item?.data?.visibility || false);
  const handleChange = useCallback(
    (event) => {
      setActive(event.target.checked);
      updateDestinations(item.id, event.target.checked);
    },
    [item.id]
  );
  return (
    <div className="border border-orange-950 flex flex-col p-5 m-h-24">
      <p className="font-bold text-lg">
        Destino: <span className="font-normal">{item?.data?.title}</span>
      </p>
      <p className="font-bold text-lg">
        Salidas:{" "}
        <span className="font-normal">
          {item?.data?.departures.map((dep) => {
            return <span key={dep}>{dep} - </span>;
          })}
        </span>
      </p>
      <p className="font-bold text-lg">
        Precio:{" "}
        <span className="font-normal">
          {item?.data?.lowest_price.price} {item?.data?.lowest_price.currency}
        </span>
      </p>
      <p className="font-bold text-lg">
        ID: <span className="font-normal">{item?.id?.slice(0, 8)}</span>
      </p>

      <div className="flex items-center font-bold">
        <label>Mostrar</label>
        <input
          type="checkbox"
          className="w-fit ml-5"
          checked={active}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Destination;
