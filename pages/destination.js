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
import { fetchDestinationsImages, transformListToDict } from "./api/images";

const Destination = () => {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [destinationImages, setDestinationImages] = useState([]);
  const [destinationsRelated, setDestinationsRelated] = useState([]);
  const [imagesDestRelated, setImagesDestRelated] = useState([]);

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
      fetchDestinationsImages(searchResults).then((val) => {
        transformListToDict(val).then((resp) => {
          setDestinationImages(resp);
        });
      });
    }
  }, [searchResults]);

  useEffect(() => {
    if (searchResults !== undefined) {
      if (searchResults.length !== 0) {
        const destino = searchResults[0]["data"];
        let destinationNames = destino["destinations_names"];
        fetchDestRelated(destinationNames).then((val) => {
          let dataFiltered = val.filter((dest) => dest["id"] !== destination);
          setDestinationsRelated(dataFiltered);
        });
      }
    }
  }, [searchResults, destination]);

  useEffect(() => {
    if (destinationsRelated !== undefined) {
      fetchDestinationsImages(destinationsRelated).then((val) => {
        transformListToDict(val).then((resp) => {
          setImagesDestRelated(resp);
        });
      });
    }
  }, [destinationsRelated]);

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
  if (destinationImages !== undefined) {
    if (destinationImages[title]?.length > 0) {
      let webInfoDestination = destinationImages[title][0]["data"];
      if (webInfoDestination !== undefined) {
        first_image = webInfoDestination["images"][0];
      }
    }
  }

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

  let img = first_image;

  const dataForConsult = `Destino: ${title},
      URL: http://localhost:3000/destination?destinationId=${destination},
      PRECIO: ${destino["lowest_price"][0]} ${destino["lowest_price"][1]}
      NOCHES: ${destino["duration"]["nights"]},
      NOMBRES DE LOS DESTINOS: ${destination_names},
      REGIMEN: ${regimen},
      BOARDING: ${boarding}, 
      PROVIDER: ${provider}
      `;

  return (
    <Template
      content={
        <DestinationContent
          img={img}
          title={title}
          sheet={sheet}
          days={days}
          currency={getCurrency(destino["lowest_price"]["currency"])}
          price={destino["lowest_price"]["price"]}
          taxes={destino["lowest_price"]["taxes"]}
          departures={departures}
          includes={includes}
          img_res={dataImages}
          boarding={boarding}
          destinations_names={destination_names}
          dataForConsult={dataForConsult}
          promotions={getPromotionsValue(promotion)}
          destinationsRelated={getData(destinationsRelated, imagesDestRelated)}
        />
      }
      title={`${title} - Turismo Serrano`}
    />
  );
};

export default Destination;
