import React from "react";
import Item from "components/ui/Sidebar/Item";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdDepartureBoard, MdWatchLater } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { ModalConsult } from "components/ui/Modals/ModalConsult";
import { ButtonPrimary } from "components/ui/Buttons/ButtonPrimary";

const Sidebar = ({
  days,
  regimen,
  currency,
  price,
  text_boarding,
  boarding,
  departures,
  includes,
  dataForConsult,
  list_boarding,
  promotions,
  taxes,
  tours,
}) => {
  let list_includes = [];
  if (includes !== undefined) {
    list_includes = includes?.map((item) => {
      return (
        <p
          key={item}
          className="p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent"
        >
          {item}.
        </p>
      );
    });
  }
  let list_tours = [];
  if (tours !== undefined) {
    list_tours = tours?.map((item) => {
      return (
        <p
          key={item}
          className="p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent"
        >
          {item}.
        </p>
      );
    });
  }

  let text = days + " dias ";
  return (
    <div className="sticky top-[80px] px-0 lg:px-5 xl:px-11 pt-5 lg:pt-11 pb-0 lg:pb-11 space-y-5 ">
      <div>
        <h2 className="text-black-950 text-sm italic">desde</h2>
        <p className="text-5xl font-bold text-orange-950 ">
          {/* items-center flex */}
          {currency + price}
          {taxes && <span className="text-sm ">+imp</span>}
        </p>
        <p className="text-black-950 text-sm italic">en base doble</p>
      </div>
      <div className="space-y-3 block ">
        {promotions !== 0 && (
          <>
            <p className="font-bold text-xl">Promoción</p>
            <Item
              text={`2do pasajero ${promotions}% OFF`}
              stylesItem="bg-yellow-500 text-black-950 font-bold text-lg text-center p-2 py-4 border-transparent"
            />
          </>
        )}

        <p className="font-bold text-2xl lg:text-2xl ">Resumen del viaje</p>

        {departures && (
          <Item icon={<BsFillCalendarEventFill />} text={departures} />
        )}

        {boarding && (
          <Item
            icon={<MdDepartureBoard />}
            text={text_boarding}
            data={boarding}
            list_boarding={list_boarding}
          />
        )}

        {text && <Item icon={<MdWatchLater />} text={text} />}
        {regimen && <Item icon={<GiMeal />} text={regimen} />}
        {list_includes.length > 0 ? (
          <div>
            <p className="subtitle">Incluye:</p>
            <Item text={list_includes} />
          </div>
        ) : (
          ""
        )}

        {list_tours.length > 0 ? (
          <div>
            <p className="subtitle">Tours:</p>
            <Item text={list_tours} />
          </div>
        ) : (
          ""
        )}
      </div>

      <ModalConsult
        dataForConsult={dataForConsult}
        trigger={<ButtonPrimary />}
      />
    </div>
  );
};

export default Sidebar;
