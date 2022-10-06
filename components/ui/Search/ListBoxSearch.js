import { Fragment, useRef } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { ALL } from "components/utils/constants";
import useInput from "hooks/useInput";
import { getFilteredData } from "components/utils/renderHelpers";
const ListBoxSearch = ({
  data,
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

  const inputEl = useRef(null);

  function handleFocus() {
    inputEl.current.select();
  }
  const { input, handleInput } = useInput("");
  return (
    <div className="w-full md:w-72 lg:w-96 md:bg-white md:mx-1 py-3 rounded-md ">
      <Combobox value={selected} onChange={onChangeSetSelected}>
        <div className="relative w-full md:w-auto ">
          <span className="text-left cursor-default sm:text-sm flex items-center ">
            <div className="flex items-center ">
              {icon}{" "}
              <p className="mx-2 text-md md:text-lg text-gray-950 w-[90px] md:w-auto remove-selection ">
                {text}:{" "}
              </p>{" "}
              <Combobox.Input
                ref={inputEl}
                onFocus={handleFocus}
                className="border-none text-left capitalize text-md md:text-xl text-black text-ellipsis overflow-hidden whitespace-nowrap"
                displayValue={input}
                onChange={handleInput}
                spellCheck="false"
              />
            </div>

            <Combobox.Button className="">
              <span className="absolute inset-y-0 right-0 flex items-center  ">
                <BiChevronDown
                  className="w-5 h-5 text-gray-400 ml-5 mr-1"
                  aria-hidden="true"
                />
              </span>
            </Combobox.Button>
          </span>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="z-[40] capitalize absolute w-full py-1 mt-1 overflow-auto text-md md:text-base lg:text-lg bg-white top-[29px]  md:top-[31px] shadow-lg max-h-60  focus:outline-none sm:text-lg">
              {getFilteredData(input, data)?.map((destinationName, index) => (
                <Combobox.Option
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
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ListBoxSearch;
