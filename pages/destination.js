import DestinationContent from "components/content/DestinationContent";
import Template from "components/layout/Template";
import { IMG_DEFAULT } from "components/utils/constants";
import {
  getCurrency,
  getData,
  getPromotionsValue,
} from "components/utils/renderHelpers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDestDocumentId, fetchDestRelated } from "./api/destinations";

const Destination = () => {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [destinationsRelated, setDestinationsRelated] = useState([]);

  useEffect(() => {
    if (!isReady) return;
    else {
      setDestination(query.destinationId);
    }
  }, [isReady, query.destinationId]);

  useEffect(() => {
    fetchDestDocumentId(destination).then((values) => {
      if (values !== undefined) {
        if (values.length === 0) {
          router.push("/404");
        } else {
          setSearchResults(values);
        }
      }
    });
  }, [destination, router]);

  useEffect(() => {
    if (searchResults !== undefined) {
      if (searchResults.length !== 0) {
        const destino = searchResults[0]["data"];
        let departures = destino["departures"];
        let title = destino["title"];
        fetchDestRelated(departures, title).then((val) => {
          setDestinationsRelated(val);
        });
      }
    }
  }, [searchResults, destination]);

  if (searchResults === undefined || searchResults.length === 0) {
    return;
  }
  const destino = searchResults[0]["data"];
  let title = destino["title"];
  let destinationNames = destino["destinations_names"];

  let firstImage = IMG_DEFAULT;
  if (destino["custom_info"] !== undefined) {
    firstImage = destino["custom_info"]["carousel_image"];
  }
  let dataImages = destino["custom_info"];

  let departures = destino["departures"];
  let sheet = destino["sheet"];

  let days = destino["duration"]["days"];
  let regimen = destino["meal_regimen"];
  let boarding = destino["boarding"];
  let includes = destino["includes"];
  let provider = destino["provider"];
  let promotion = destino["promotions"];
  if (typeof includes === "string") {
    includes = [includes];
  }

  const dataForConsult = `Destino: ${title},
      URL: http://localhost:3000/destination?destinationId=${destination},
      PRECIO: ${destino["lowest_price"][0]} ${destino["lowest_price"][1]}
      NOCHES: ${destino["duration"]["nights"]},
      NOMBRES DE LOS DESTINOS: ${destinationNames},
      REGIMEN: ${regimen},
      BOARDING: ${boarding}, 
      PROVIDER: ${provider}
      `;

  return (
    <Template
      content={
        <DestinationContent
          img={firstImage}
          title={title}
          sheet={sheet}
          days={days}
          currency={getCurrency(destino["lowest_price"]["currency"])}
          price={destino["lowest_price"]["price"]}
          taxes={destino["lowest_price"]["taxes"]}
          departures={departures}
          includes={includes}
          imgRes={dataImages}
          boarding={boarding}
          destinationNames={destinationNames}
          dataForConsult={dataForConsult}
          promotions={getPromotionsValue(promotion)}
          destinationsRelated={getData(destinationsRelated)}
        />
      }
      title={`${title} - Turismo Serrano`}
    />
  );
};

export default Destination;
