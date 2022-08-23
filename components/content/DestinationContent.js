import Sidebar from "components/layout/Sidebar";
import NotificationFail from "components/ui/Notifications/NotificationFail";
import NotificationLoading from "components/ui/Notifications/NotificationLoading";
import NotificationSucess from "components/ui/Notifications/NotificationSuccess";
import Image from "next/image";
import NotificationContext from "context/NotificationContext";
import { useContext } from "react";
import {
  FAIL,
  IMG_DEFAULT,
  LOADING,
  SUCCESS,
} from "components/utils/constants";
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
  if (boarding.includes("mar del plata y zona")) {
    text_boarding = "Mar del Plata y zona";
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
            />
          </div>
          <div className=" w-[100%] lg:w-[75%] block py-5 px-5">
            {destinations_names.map((destination, index) => {
              let getImages = [IMG_DEFAULT];
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

              return (
                <div key={index} className="space-y-5">
                  <TitleDestination text={destination} />{" "}
                  <WrapperPrimary list={getImages} />
                  <div className="text-justify">
                    Al contrario del pensamiento popular, el texto de Lorem
                    Ipsum no es simplemente texto aleatorio. Tiene sus raices en
                    una pieza clsica de la literatura del Latin, que data del
                    año 45 antes de Cristo, haciendo que este adquiera mas de
                    2000 años de antiguedad. Richard McClintock, un profesor de
                    Latin de la Universidad de Hampden-Sydney en Virginia,
                    encontró una de las palabras más oscuras de la lengua del
                    latín, consecteur, en un pasaje de Lorem Ipsum, y al seguir
                    leyendo distintos textos del latín, descubrió la fuente
                    indudable. Lorem Ipsum viene de las secciones 1.10.32 y
                    1.10.33 de de Finnibus Bonorum et Malorum (Los Extremos del
                    Bien y El Mal) por Cicero, escrito en el año 45 antes de
                    Cristo. Este libro es un tratado de teoría de éticas, muy
                    popular durante el Renacimiento. La primera linea del Lorem
                    Ipsum, Lorem ipsum dolor sit amet.., viene de una linea en
                    la sección 1.10.32 El trozo de texto estándar de Lorem Ipsum
                    usado desde el año 1500 es reproducido debajo para aquellos
                    interesados. Las secciones 1.10.32 y 1.10.33 de de Finibus
                    Bonorum et Malorum por Cicero son también reproducidas en su
                    forma original exacta, acompañadas por versiones en Inglés
                    de la traducción realizada en 1914 por H. Rackham.
                  </div>
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
