import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import PopoverUi from "components/ui/Popover/PopoverUi";

const Item = ({ text, icon, data, list_boarding, stylesItem }) => {
  return (
    <div className="flex items-center space-x-2 border border-gray-300 text-lg relative ">
      {icon && (
        <div className="border-r border-gray-300 p-2 py-4 text-xl">{icon}</div>
      )}
      <div className={`first-letter-capitalize w-full  ${stylesItem}`}>
        {text}
      </div>

      {list_boarding && data.length > 0 ? (
        <PopoverUi
          button={<BsPlusCircleFill className="text-orange-950 text-lg" />}
          data={data}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
