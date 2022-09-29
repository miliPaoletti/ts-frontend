import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { TITLE_INDEX } from "components/utils/constants";
import { getMediumCards } from "components/utils/renderHelpers";
import { fetchPopularDestinations } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const PopularDestinations = () => {
  const [popularDest, setPopularDest] = useState([]);

  useEffect(() => {
    // get popular destinations
    fetchPopularDestinations().then(setPopularDest);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container-general md:pt-11">
        <section>
          <TitlePrimary text={TITLE_INDEX.text} text2={TITLE_INDEX.text2} />
          <div className="display-medium-cards">
            {getMediumCards(popularDest)}
          </div>
        </section>
      </div>
    </div>
  );
};
