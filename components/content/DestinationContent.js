import Sidebar from "components/layout/Sidebar";
import {
  getCurrency,
  getDeparturesOrder,
  getPromotionsValue,
  getStyledData,
} from "components/utils/renderHelpers";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDestDocumentId } from "pages/api/destinations";
import { IMG_DEFAULT } from "components/utils/constants";
import Banner from "components/layout/destination/Banner";
import DestinationInfo from "components/layout/destination/DestinationInfo";
import DestinationsRelated from "components/layout/destination/DestinationsRelated";
import Head from "next/head";

const DestinationContent = () => {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!isReady) return;
    else {
      if (query.destinationId !== "") {
        fetchDestDocumentId(query.destinationId).then((values) => {
          if (values !== undefined) {
            if (values.length === 0) {
              router.push("/404");
            } else {
              setSearchResults(values);
              setDestination(query.destinationId);
            }
          }
        });
      }
    }
  }, [isReady, query.destinationId, router]);

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

  let days = destino["duration"]["days"];
  let regimen = destino["meal_regimen"];
  let boarding = destino["boarding"];
  let includes = destino["includes"];
  let provider = destino["provider"];
  let promotion = destino["promotions"];
  if (typeof includes === "string") {
    includes = [includes];
  }

  let tours = destino["tours"];

  const dataForConsult = `Destino: ${title},
      URL: http://localhost:3000/destination?destinationId=${destination},
      PRECIO: ${destino["lowest_price"][0]} ${destino["lowest_price"][1]}
      NOCHES: ${destino["duration"]["nights"]},
      NOMBRES DE LOS DESTINOS: ${destinationNames},
      REGIMEN: ${regimen},
      BOARDING: ${boarding}, 
      PROVIDER: ${provider}
      `;

  let text_boarding = "Tandil y zona";
  let list_boarding = true;
  if (boarding.includes("mar del plata y zona")) {
    text_boarding = "Mar del Plata y zona";
    list_boarding = false;
  } else if (boarding.includes("aeroparque")) {
    text_boarding = "Aeroparque";
    list_boarding = false;
  } else if (boarding.includes("ezeiza")) {
    text_boarding = "Ezeiza";
    list_boarding = false;
  }
  return (
    <>
      <Head>
        <title>{title} - Turismo Serrano</title>
      </Head>
      <div className="bg-white ">
        <Banner image={firstImage} title={title} />

        <div className="container-general ">
          <div className="flex flex-col lg:flex-row flex-wrap min-w-100 p-2  pt-0">
            <div className="relative w-[100%] lg:w-[25%] block ">
              <Sidebar
                days={days}
                regimen={regimen}
                currency={getCurrency(destino["lowest_price"]["currency"])}
                price={destino["lowest_price"]["price"]}
                departures={getDeparturesOrder(departures)}
                text_boarding={text_boarding}
                boarding={getStyledData(boarding)}
                includes={includes}
                dataForConsult={dataForConsult}
                list_boarding={list_boarding}
                promotions={getPromotionsValue(promotion)}
                taxes={destino["lowest_price"]["taxes"]}
                tours={tours}
              />
            </div>
            <DestinationInfo
              destinationNames={destinationNames}
              dataImages={dataImages}
            />
            <DestinationsRelated
              searchResults={searchResults}
              destination={destination}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationContent;
