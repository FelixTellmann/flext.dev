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
    <label className="flex relative items-start">
      <div className="flex-1 min-w-0 text-sm">
        <div className="font-medium text-gray-700 dark:text-dark-text select-none">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <Listbox value={value} onChange={setValue}>
        {({ open }) => (
          <>
            <div className="relative z-20 min-w-[45%]">
              <Listbox.Button className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm cursor-default focus:outline-none sm:text-sm">
                <span className="block truncate">{selectedOption?.label}</span>
                <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                  <SelectorIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={open}
              >
                <Listbox.Options className="overflow-auto absolute z-50 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        clsx(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative py-2 pr-9 pl-3 cursor-default select-none"
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
                                  "flex absolute inset-y-0 right-0 items-center pr-4"
                                )}
                              >
                                <CheckIcon aria-hidden="true" className="w-5 h-5" />
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
