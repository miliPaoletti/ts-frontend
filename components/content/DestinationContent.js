import Sidebar from "components/layout/Sidebar";
import Image from "next/image";
import {
  getDeparturesOrder,
  getStyledData,
  isKeyInObject,
} from "components/utils/renderHelpers";
import TitleDestination from "components/ui/Titles/TitleDestination";
import TitlePrimary from "components/ui/Titles/TitlePrimary";
import { Wrapper } from "components/ui/WrapperImages/Wrapper";

const DestinationContent = ({
  img,
  title,
  days,
  regimen,
  currency,
  price,
  departures,
  includes,
  imgRes,
  boarding,
  destinationNames,
  dataForConsult,
  promotions,
  destinationsRelated,
  taxes,
}) => {
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
    <div className="bg-white ">
      <div className="relative slider-container w-100">
        <div className="opacity-imgs">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="center z-0 remove-selection"
            alt=""
          />
        </div>
        <p
          className="slide-text-destination "
          style={{ textShadow: "0 0 2px #333" }}
        >
          {title}
        </p>
      </div>

      <div className="container-general ">
        <div className="flex flex-col lg:flex-row flex-wrap min-w-100 p-2  pt-0">
          <div className="relative w-[100%] lg:w-[25%] block ">
            <Sidebar
              days={days}
              regimen={regimen}
              currency={currency}
              price={price}
              departures={getDeparturesOrder(departures)}
              text_boarding={text_boarding}
              boarding={getStyledData(boarding)}
              includes={includes}
              dataForConsult={dataForConsult}
              list_boarding={list_boarding}
              promotions={promotions}
              taxes={taxes}
            />
          </div>
          <div className=" w-[100%] lg:w-[75%] block py-5 px-5">
            {destinationNames.map((destination, index) => {
              let getImages = [];
              let getDescription = "";
              let data = isKeyInObject(imgRes, destination);
              if (data) {
                getImages = data["images"];
                getDescription = data["description"];
              }

              return (
                <div key={index} className="space-y-5">
                  <TitleDestination text={destination} />{" "}
                  <Wrapper images={getImages} />
                  <div className="text-justify whitespace-pre-wrap">
                    {getDescription}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-0 lg:px-5 xl:px-11 pt-32">
            <TitlePrimary text="Destinos " text2="Relacionados" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {destinationsRelated}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
