import React from "react";
import Item from "components/ui/Sidebar/Item";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdDepartureBoard, MdWatchLater } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { ModalConsult } from "components/ui/Modals/ModalConsult";

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

  let text = days + " dias ";
  return (
    <div className="sticky top-[80px] px-0 lg:px-5 xl:px-11 pt-5 lg:pt-11 pb-0 lg:pb-11 space-y-5 ">
      <div>
        <h2 className="text-black-950 text-sm italic">desde</h2>
        <p className="text-5xl font-bold text-orange-950">{currency + price}</p>
        <p className="text-black-950 text-sm italic">en base doble</p>
      </div>
      <div className="space-y-3 block ">
        <p className="font-bold text-xl">Resumen del viaje</p>

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
            <p className="pb-3 font-medium">Incluye:</p>
            <Item text={list_includes} />
          </div>
        ) : (
          ""
        )}
      </div>

      <ModalConsult dataForConsult={dataForConsult} />
    </div>
  );
};

export default Sidebar;
