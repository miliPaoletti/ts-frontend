import Sidebar from "components/layout/Sidebar";
import NotificationFail from "components/ui/Notifications/NotificationFail";
import NotificationLoading from "components/ui/Notifications/NotificationLoading";
import NotificationSucess from "components/ui/Notifications/NotificationSuccess";
import Image from "next/image";
import NotificationContext from "context/NotificationContext";
import { useContext } from "react";
import { FAIL, LOADING, SUCCESS } from "components/utils/constants";
import {
  getDeparturesOrder,
  getStyledData,
} from "components/utils/renderHelpers";
import TitleDestination from "components/ui/Titles/TitleDestination";
import WrapperPrimary from "components/ui/WrapperImages/WrapperPrimary";
const DestinationContent = ({
  img,
  title,
  days,
  regimen,
  currency,
  price,
  departures,
  includes,
  img_res,
  boarding,
  destinations_names,
  dataForConsult,
}) => {
  const { notification } = useContext(NotificationContext);

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
      {notification === LOADING ? <NotificationLoading /> : ""}
      {notification === SUCCESS ? <NotificationSucess /> : ""}
      {notification === FAIL ? <NotificationFail /> : ""}
      <div className="relative slider-container w-100">
        <div className="opacity-imgs">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="center z-0 "
            alt=""
          />
        </div>
        <p className="slide-text-destination ">{title}</p>
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
            />
          </div>
          <div className=" w-[100%] lg:w-[75%] block py-5 px-5">
            {destinations_names.map((destination, index) => {
              let getImages = [];
              let getDescription = "";
              if (img_res.length > 0) {
                let data = img_res?.find(
                  (dest) => dest?.destination_names === destination
                );
                if (data !== undefined) {
                  getImages = data["data"]["images"];
                  getDescription = data["data"]["description"];
                }
              }

              return getImages.length > 0 && getDescription !== "" ? (
                <div key={index} className="space-y-5">
                  <TitleDestination text={destination} />{" "}
                  <WrapperPrimary list={getImages} />
                  <div className="text-justify">{getDescription}</div>
                </div>
              ) : (
                <div className="mt-11">
                  No hay información disponible en estos momentos
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
