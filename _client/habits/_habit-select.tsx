import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC, Fragment, useState } from "react";

type HabitSelectProps = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  setValue: (val: string) => void;
  value: string;
  info?: string;
};

export const HabitSelect: FC<HabitSelectProps> = ({ label, options, setValue, value, info }) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="select-none font-medium text-gray-700 dark:text-dark-text">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <Listbox value={value} onChange={setValue}>
        {({ open }) => (
          <>
            <div className="relative z-20 min-w-[45%]">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedOption?.label}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={open}
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        clsx(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pr-9 pl-3"
                        )
                      }
                      value={option.value}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={clsx(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.label}
                          </span>

                          {selected
                            ? <span
                                className={clsx(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon aria-hidden="true" className="h-5 w-5" />
                              </span>
                            : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </label>
  );
};

export default HabitSelect;
