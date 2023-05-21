import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsChevronDown } from "react-icons/bs";
import { DROPDOWN_ADMIN } from "components/utils/constants";
// TODO: create a generic dropdown component
export function DropdownAdmin({
  handleVisibilityTrue,
  handleVisibilityFalse,
  handleByName,
  text,
}) {
  return (
    <Menu as="div" className="relative pb-3 lg:mx-5 ">
      <div>
        <Menu.Button className="inline-flex items-center bg-gray-950  rounded-md lg:px-5 py-2 text-md font-medium text-white focus:outline-none focus-visible:ring-2 ">
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
                    handleVisibilityTrue();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {DROPDOWN_ADMIN.visibility_true}
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleVisibilityFalse();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {DROPDOWN_ADMIN.visibility_false}
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    handleByName();
                  }}
                  className={`${
                    active ? "bg-orange-950 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {DROPDOWN_ADMIN.name}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
