import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { getData } from "components/utils/renderHelpers";
import { fetchPopularDestinations } from "pages/api/destinations";
import { useEffect, useState } from "react";

export const PopularDestinations = () => {
  const [popularDest, setPopularDest] = useState([]);

  useEffect(() => {
    fetchPopularDestinations().then(setPopularDest);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container-general md:pt-11">
        <section>
          <TitlePrimary text="Destinos " text2="Destacados" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {getData(popularDest)}
          </div>
        </section>
      </div>
    </div>
  );
};
