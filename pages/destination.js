import DestinationContent from "components/content/DestinationContent";
import Template from "components/layout/Template";
import { IMG_DEFAULT } from "components/utils/constants";
import { getCurrency } from "components/utils/renderHelpers";
import { NotificationProvider } from "context/NotificationContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDestDocumentId } from "./api/destinations";
import { fetchDestinationsImages, transformListToDict } from "./api/images";

const Destination = () => {
  const { query, isReady } = useRouter();
  const [destination, setDestination] = useState("");
  //   const [month, setMonth] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [destinationImages, setDestinationImages] = useState([]);

  useEffect(() => {
    if (!isReady) return;
    else {
      setDestination(query.destinationId);
      //   setMonth(query.month);
    }
  }, [isReady, query.destinationId]);

  useEffect(() => {
    fetchDestDocumentId(destination).then(setSearchResults);
  }, [destination]);

  useEffect(() => {
    if (searchResults !== undefined) {
      fetchDestinationsImages(searchResults).then((val) => {
        transformListToDict(val).then((resp) => {
          setDestinationImages(resp);
        });
      });
    }
  }, [searchResults]);

  if (
    searchResults === undefined ||
    searchResults.length === 0 ||
    destinationImages.length === 0 ||
    Object.entries(destinationImages).length === 0
  ) {
    return;
  }
  const destino = searchResults[0]["data"];
  let title = destino["title"];
  let destination_names = destino["destinations_names"];

  let first_image = IMG_DEFAULT;

  let dataImages = destinationImages[title];
  if (destinationImages[title].length > 0) {
    let webInfoDestination = destinationImages[title][0]["data"];
    if (webInfoDestination !== undefined) {
      first_image = webInfoDestination["images"][0];
    }
  }

  let departures = destino["departures"];
  let sheet = destino["sheet"];
  let days = Object.values(destino["duration"])[0];
  let nights = Object.values(destino["duration"])[1];
  let regimen = destino["meal_regimen"];
  let boarding = destino["boarding"];
  let includes = destino["includes"];

  if (typeof includes === "string") {
    includes = [includes];
  }

  let img = first_image;

  const dataForConsult = `Destino: ${title},
      URL: http://localhost:3000/destination?destinationId=${destination},
      PRECIO: ${destino["lowest_price"][0]} ${destino["lowest_price"][1]}
      NOCHES: ${nights},
      NOMBRES DE LOS DESTINOS: ${destination_names},
      REGIMEN: ${regimen},
      BOARDING: ${boarding} `;

  return (
    <NotificationProvider>
      <Template
        content={
          <DestinationContent
            img={img}
            title={title}
            sheet={sheet}
            days={days}
            regimen={regimen}
            currency={getCurrency(destino["lowest_price"]["currency"])}
            price={destino["lowest_price"]["price"]}
            departures={departures}
            includes={includes}
            img_res={dataImages}
            nights={nights}
            boarding={boarding}
            destinations_names={destination_names}
            dataForConsult={dataForConsult}
          />
        }
      />
    </NotificationProvider>
  );
};

export default Destination;
