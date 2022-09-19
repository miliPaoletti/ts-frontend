import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { getData } from "components/utils/renderHelpers";
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
    <div className="px-0 lg:px-5 xl:px-11 pt-32">
      <TitlePrimary text="Destinos " text2="Relacionados" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {getData(destinationsRelated)}
      </div>
    </div>
  );
}
