import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { TITLE_DESTINATIONS_RELATED } from "components/utils/constants";
import { getMediumCards } from "components/utils/renderHelpers";
import { fetchDestRelated } from "pages/api/destinations";
import { useEffect, useState } from "react";

export default function DestinationsRelated({ searchResults, destination }) {
  const [destinationsRelated, setDestinationsRelated] = useState([]);

  useEffect(() => {
    if (searchResults !== undefined) {
      if (searchResults.length !== 0) {
        const destino = searchResults[0]["data"];
        let departures = destino["departures"];
        let title = destino["title"];
        let destinationsNames = destino["destinations_names"];
        fetchDestRelated(departures, title, destinationsNames).then((val) => {
          setDestinationsRelated(val);
        });
      }
    }
  }, [searchResults, destination]);

  return (
    <div className="w-full px-0 lg:px-5 xl:px-11 pt-16 md:pt-24">
      <TitlePrimary
        text={TITLE_DESTINATIONS_RELATED.text}
        text2={TITLE_DESTINATIONS_RELATED.text2}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {getMediumCards(destinationsRelated)}
      </div>
    </div>
  );
}
