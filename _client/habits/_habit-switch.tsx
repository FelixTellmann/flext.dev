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
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="select-none font-medium text-gray-700 dark:text-dark-text">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="ml-4 flex items-center">
        <Switch
          checked={value}
          className={clsx(
            value ? "bg-green-500 dark:bg-teal-500" : "bg-gray-200 dark:bg-dark-bg",
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-teal-500"
          )}
          onChange={setValue}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={clsx(
              value ? "translate-x-5 dark:bg-gray-200" : "translate-x-0 dark:bg-gray-700",
              "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          >
            <span
              aria-hidden="true"
              className={clsx(
                value ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
            >
              <svg
                className="dark:text-gray-20 h-3 w-3 text-gray-400"
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
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
            >
              <svg
                className="h-3 w-3 text-green-600 dark:text-teal-600"
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
