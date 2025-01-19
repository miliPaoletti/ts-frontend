import React from "react";
import Item from "components/ui/Sidebar/Item";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdDepartureBoard, MdWatchLater } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { getPrice } from "components/utils/renderHelpers";
import { Promotion } from "components/ui/Cards/Promotion";
import { createWspMessage } from "components/utils/createWspMessage";
import Link from "next/link";

const Sidebar = ({
  days,
  regimen,
  currency,
  price,
  textBoarding,
  boarding,
  departures,
  includes,
  dataForConsult,
  listBoarding,
  promotions,
  taxes,
  tours,
}) => {
  let listIncludes = [];
  if (includes !== undefined) {
    listIncludes = includes?.map((item) => {
      return (
        <p
          key={item}
          className="p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent"
        >
          {item}
        </p>
      );
    });
  }
  let listTours = [];
  if (tours !== undefined) {
    listTours = tours?.map((item) => {
      return (
        <p
          key={item}
          className="p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent"
        >
          {item}
        </p>
      );
    });
  }

  let text = days + " dias ";

  const destination = {
    title: dataForConsult.DESTINATION,
  };

  return (
    <div className="sticky top-[80px] px-0 lg:px-5 xl:px-11 pt-5 lg:pt-11 pb-0 lg:pb-11 space-y-5 ">
      <div>
        <h2 className="text-black-950 text-sm italic">desde</h2>
        <p className="text-5xl font-bold text-orange-950 font-[Rubik]">
          {getPrice(price, currency)}
          {taxes && <span className="text-sm ">+imp</span>}
        </p>
        <p className="text-black-950 text-sm italic">en base doble</p>
      </div>
      <div className="space-y-3 block ">
        {promotions !== 0 && (
          <>
            <p className="font-bold text-xl">Promoción</p>
            <Promotion promotion={promotions} component="sidebar" />
          </>
        )}

        <p className="font-bold text-2xl lg:text-xl ">Información del viaje</p>

        {departures && (
          <Item icon={<BsFillCalendarEventFill />} text={departures} />
        )}

        {boarding && (
          <Item
            icon={<MdDepartureBoard />}
            text={textBoarding}
            data={boarding}
            listBoarding={listBoarding}
          />
        )}

        {days !== -1 && text && <Item icon={<MdWatchLater />} text={text} />}
        {regimen && <Item icon={<GiMeal />} text={regimen} />}
        {listIncludes.length > 0 ? (
          <div>
            <p className="subtitle">Incluye:</p>
            <Item text={listIncludes} />
          </div>
        ) : (
          ""
        )}

        {listTours.length > 0 ? (
          <div>
            <p className="subtitle">Tours:</p>
            <Item text={listTours} />
          </div>
        ) : (
          ""
        )}
      </div>
      <Link href={createWspMessage(destination)}>
        <a
          className="button-primary flex w-full "
          rel="noreferrer"
          target="_blank"
        >
          Consultar
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
