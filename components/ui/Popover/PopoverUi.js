import React from "react";
import { Popover } from "@headlessui/react";

const PopoverUi = ({ button, data }) => {
  return (
    <Popover className="flex items-center justify-center absolute bottom-4 right-2 ">
      <Popover.Button className="focus-visible:outline-0">
        {button}{" "}
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-gray-200 p-2 rounded-lg top-9 right-0 text-xs w-[200px]">
        <div className="">{data}</div>
      </Popover.Panel>
    </Popover>
  );
};

export default PopoverUi;
