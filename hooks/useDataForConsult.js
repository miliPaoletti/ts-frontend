import { useEffect, useState } from "react";
import { BOARDING, DAYS } from "components/utils/constants";
import { DESTINATION } from "components/utils/constants";
import { DESTINATIONS_NAMES } from "components/utils/constants";
import { MONTHS } from "components/utils/constants";
import { NIGHTS } from "components/utils/constants";
import { PRICE } from "components/utils/constants";
import { PROVIDER } from "components/utils/constants";
import { REGIMEN } from "components/utils/constants";
import { URL } from "components/utils/constants";

export const useDataForConsult = () => {
  const [url, setUrl] = useState("");

  let dataForConsult = "";

  useEffect(() => {
    if (typeof window !== undefined) {
      setUrl(window.location.href);
    }
  }, []);

  if (url !== "") {
    let splitInterrogation = url.split("?");
    if (splitInterrogation.length > 1) {
      let page = splitInterrogation[0].split("/").pop();
      if (page === "destination") {
        dataForConsult = {
          DESTINATION: localStorage.getItem(DESTINATION),
          URL: localStorage.getItem(URL),
          PRICE: localStorage.getItem(PRICE),
          NIGHTS: localStorage.getItem(NIGHTS),
          DESTINATIONS_NAMES: localStorage.getItem(DESTINATIONS_NAMES),
          REGIMEN: localStorage.getItem(REGIMEN),
          BOARDING: localStorage.getItem(BOARDING),
          PROVIDER: localStorage.getItem(PROVIDER),
          MONTHS: localStorage.getItem(MONTHS),
          DAYS: localStorage.getItem(DAYS),
        };
      }
    }
  }

  return { dataForConsult };
};
