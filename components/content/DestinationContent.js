import Sidebar from "components/layout/Sidebar";
import {
  getBoarding,
  getCurrency,
  getDeparturesOrder,
  getPromotionsValue,
  getStyledData,
} from "components/utils/renderHelpers";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDestDocumentId } from "pages/api/destinations";
import {
  BOARDING,
  COMPANY_DATA,
  DESTINATION,
  DESTINATIONS_NAMES,
  IMG_DEFAULT,
  MONTHS,
  NIGHTS,
  PATHNAMES,
  PRICE,
  PROVIDER,
  REGIMEN,
  URL,
} from "components/utils/constants";
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
              router.push(`/${PATHNAMES.error404}`);
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

  const dataForConsult = `
      ${DESTINATION}: ${title},
      ${URL}: ${window.location.href},
      ${PRICE}: ${destino["lowest_price"]["currency"]} ${destino["lowest_price"]["price"]}
      ${NIGHTS}: ${destino["duration"]["nights"]},
      ${DESTINATIONS_NAMES}: ${destinationNames},
      ${REGIMEN}: ${regimen},
      ${BOARDING}: ${boarding}, 
      ${PROVIDER}: ${provider}
      ${MONTHS}: ${departures}
      `;

  localStorage.setItem(DESTINATION, title);
  localStorage.setItem(URL, window.location.href);
  localStorage.setItem(
    PRICE,
    destino["lowest_price"]["currency"] + destino["lowest_price"]["price"]
  );
  localStorage.setItem(NIGHTS, destino["duration"]["nights"]);
  localStorage.setItem(DESTINATIONS_NAMES, destinationNames);
  localStorage.setItem(REGIMEN, regimen);
  localStorage.setItem(BOARDING, boarding);
  localStorage.setItem(PROVIDER, provider);
  localStorage.setItem(MONTHS, departures);

  let boardingLocal = getBoarding(boarding);

  return (
    <>
      <Head>
        <title>
          {title} - {COMPANY_DATA.name}
        </title>
      </Head>
      <div className="bg-white ">
        <Banner image={firstImage} title={title} />

        <div className="container-general ">
          <div className="flex flex-col lg:flex-row lg:flex-wrap min-w-100 p-2  pt-0">
            <div className="relative w-[100%] lg:w-[25%] block ">
              <Sidebar
                days={days}
                regimen={regimen}
                currency={getCurrency(destino["lowest_price"]["currency"])}
                price={destino["lowest_price"]["price"]}
                departures={getDeparturesOrder(departures)}
                textBoarding={boardingLocal[0]}
                boarding={getStyledData(boarding)}
                includes={includes}
                dataForConsult={dataForConsult}
                listBoarding={boardingLocal[1]}
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
