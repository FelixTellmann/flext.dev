import { Combobox, Listbox, Switch, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

type HabitTimePickerProps = { setValue: (value) => void; title: string; value: any };

export const HabitTimePicker: FC<HabitTimePickerProps> = ({ title, value, setValue }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  return (
    <>
      <span className="flex relative items-start">
        <div className="flex-1 min-w-0 text-sm">
          <div className="font-medium text-gray-700 dark:text-dark-text select-none">{title}</div>
        </div>
        <div className="flex items-center ml-3 h-5">
          <Listbox value={hour} onChange={setHour}>
            {({ open }) => (
              <>
                {/*<Listbox.Label className="block text-sm font-medium text-gray-700">
                  Assigned to
                </Listbox.Label>*/}
                <div className="relative mt-1">
                  <Listbox.Button className="relative py-2 pr-10 pl-3 w-full min-w-[70px] text-left bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm cursor-default focus:outline-none sm:text-sm">
                    <span className="block truncate">{`${hour.toString().padStart(2, "0")}`}</span>
                    <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                      <pre className="w-5 h-5 text-gray-400">h</pre>
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={open}
                  >
                    <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none sm:text-sm">
                      {[...Array(13).keys()].map((hour) => (
                        <Listbox.Option
                          key={hour}
                          className={({ active }) =>
                            clsx(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "relative py-2 pr-3 pl-3 cursor-default select-none"
                            )
                          }
                          value={hour}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={clsx(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {`${hour.toString().padStart(2, "0")}`}
                              </span>
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
          <span className="px-1">:</span>
          <Listbox value={minute} onChange={setMinute}>
            {({ open }) => (
              <>
                {/*<Listbox.Label className="block text-sm font-medium text-gray-700">
                  Assigned to
                </Listbox.Label>*/}
                <div className="relative mt-1">
                  <Listbox.Button className="relative py-2 pr-10 pl-3 w-full min-w-[70px] text-left bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm cursor-default focus:outline-none sm:text-sm">
                    <span className="block truncate">{`${minute
                      .toString()
                      .padStart(2, "0")}`}</span>
                    <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                      <pre className="w-5 h-5 text-gray-400">m</pre>
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={open}
                  >
                    <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none sm:text-sm">
                      {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((hour) => (
                        <Listbox.Option
                          key={hour}
                          className={({ active }) =>
                            clsx(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "relative py-2 pr-3 pl-3 cursor-default select-none"
                            )
                          }
                          value={hour}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={clsx(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {`${hour.toString().padStart(2, "0")}`}
                              </span>
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
        </div>
      </span>
    </>
  );
};
