import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, useState } from "react";

type HabitTimePickerProps = { setValue: (value: any) => void; title: string; value: any };

export const HabitTimePicker: FC<HabitTimePickerProps> = ({ title, value, setValue }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  return (
    <>
      <span className="relative flex items-start">
        <div className="min-w-0 flex-1 text-sm">
          <div className="select-none font-medium text-gray-700 dark:text-dark-text">{title}</div>
        </div>
        <div className="ml-3 flex h-5 items-center">
          <Listbox value={hour} onChange={setHour}>
            {({ open }) => (
              <>
                {/*<Listbox.Label className="block text-sm font-medium text-gray-700">
                  Assigned to
                </Listbox.Label>*/}
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full min-w-[70px] cursor-default rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="block truncate">{`${hour.toString().padStart(2, "0")}`}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <pre className="h-5 w-5 text-gray-400">h</pre>
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={open}
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {[...Array(13).keys()].map((hour) => (
                        <Listbox.Option
                          key={hour}
                          className={({ active }) =>
                            clsx(
                              active ? "bg-indigo-600 text-white" : "text-gray-900",
                              "relative cursor-default select-none py-2 pr-3 pl-3"
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
                  <Listbox.Button className="relative w-full min-w-[70px] cursor-default rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="block truncate">{`${minute
                      .toString()
                      .padStart(2, "0")}`}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <pre className="h-5 w-5 text-gray-400">m</pre>
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={open}
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((hour) => (
                        <Listbox.Option
                          key={hour}
                          className={({ active }) =>
                            clsx(
                              active ? "bg-indigo-600 text-white" : "text-gray-900",
                              "relative cursor-default select-none py-2 pr-3 pl-3"
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
