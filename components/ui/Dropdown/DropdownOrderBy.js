import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { FaSortAlphaDown } from "react-icons/fa";
import { DROPDOWN } from "components/utils/constants";

export function DropdownOrderBy({
  handleOrderAsc,
  handleOrderDesc,
  handleOrderName,
  text,
}) {
  return (
    <Menu as="div" className="relative pb-3 lg:mx-5 ">
      <div>
        <Menu.Button className="inline-flex items-center  rounded-md lg:px-5 py-2 text-md font-medium text-black focus:outline-none focus-visible:ring-2 ">
          {text}
          <BsChevronDown className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute text-sm rounded-md bg-white shadow-lg border border-gray-100 focus:outline-none z-[9999]">
          <div className="px-1 py-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleOrderAsc();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <RiSortAsc className="mr-2 h-5 w-5" aria-hidden="true" />
                  {DROPDOWN.asc}
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleOrderDesc();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <RiSortDesc className="mr-2 h-5 w-5" aria-hidden="true" />
                  {DROPDOWN.desc}
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleOrderName();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <FaSortAlphaDown
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  {DROPDOWN.populars}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
