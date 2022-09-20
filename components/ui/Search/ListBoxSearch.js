import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { TbSelector } from "react-icons/tb";
import { ALL } from "components/utils/constants";
const ListBoxSearch = ({
  data,
  separator,
  icon,
  onChange,
  text,
  selected,
  updateMonths,
}) => {
  const onChangeSetSelected = (q) => {
    onChange(q);
    if (updateMonths) {
      updateMonths(ALL);
    }
  };
  return (
    <div className="w-full md:w-72 lg:w-96 remove-selection">
      <Listbox value={selected} onChange={onChangeSetSelected}>
        <div className="relative w-full md:w-auto border-b py-2 border-b-gray-200 md:py-0 md:border-b-transparent">
          <span
            className={
              separator === true
                ? "text-left cursor-default sm:text-sm separator flex items-center"
                : "text-left cursor-default sm:text-sm flex items-center"
            }
          >
            <Listbox.Button className="remove-selection py-1 text-left flex items-center w-full capitalize border-none focus:ring-0 text-md md:text-xl leading-5 text-black bg-transparent">
              {icon}{" "}
              <p className="mx-2 text-md md:text-lg text-gray-950 remove-selection w-[70px] md:w-auto">
                {text}:{" "}
              </p>{" "}
              <p className="text-ellipsis overflow-hidden  whitespace-nowrap ">
                {selected}
              </p>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <TbSelector
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </span>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-[40] capitalize absolute w-full py-1 mt-1 overflow-auto text-md md:text-base lg:text-lg bg-white rounded-md shadow-lg max-h-60  focus:outline-none sm:text-lg">
              {data?.map((destinationName, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-white bg-orange-950" : "text-gray-900"
                    }`
                  }
                  value={destinationName}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block text-center ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {destinationName}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400">
                          <BsCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBoxSearch;
