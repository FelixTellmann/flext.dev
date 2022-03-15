import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { FC } from "react";

type HabitSwitchProps = {
  id: string;
  label: string;
  setValue: (val: boolean) => void;
  value: boolean;
  info?: string;
};

export const HabitSwitch: FC<HabitSwitchProps> = ({ label, value, setValue, info }) => {
  return (
    <label className="flex relative items-start">
      <div className="flex-1 min-w-0 text-sm">
        <div className="font-medium text-gray-700 dark:text-dark-text select-none">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="flex items-center ml-4">
        <Switch
          checked={value}
          className={clsx(
            value ? "bg-green-500 dark:bg-teal-500" : "bg-gray-200 dark:bg-dark-bg",
            "inline-flex relative flex-shrink-0 w-11 h-6 rounded-full border-2 border-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none"
          )}
          onChange={setValue}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={clsx(
              value ? "dark:bg-gray-200 translate-x-5" : "dark:bg-gray-700 translate-x-0",
              "inline-block relative w-5 h-5 bg-white rounded-full ring-0 shadow transition duration-200 ease-in-out transform pointer-events-none"
            )}
          >
            <span
              aria-hidden="true"
              className={clsx(
                value ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                "flex absolute inset-0 justify-center items-center w-full h-full transition-opacity"
              )}
            >
              <svg
                className="w-3 h-3 text-gray-400 dark:text-gray-20"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className={clsx(
                value ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
                "flex absolute inset-0 justify-center items-center w-full h-full transition-opacity"
              )}
            >
              <svg
                className="w-3 h-3 text-green-600 dark:text-teal-600"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </Switch>
      </div>
    </label>
  );
};
