import { CheckIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC } from "react";

export type ProgressButtonProps = {
  completed: boolean;
  description: string;
  name: string;
  onClick: () => void;
  selected: boolean;
  isLast?: boolean;
};

export const ProgressButton: FC<ProgressButtonProps> = ({
  completed,
  description,
  name,
  onClick,
  selected,
  isLast,
}) => (
  <li className={clsx(isLast ? "" : "pb-10", "relative")}>
    {isLast
      ? null
      : <div
          aria-hidden="true"
          className={clsx(
            "absolute top-4 left-1/2 mt-0.5 -ml-px w-full h-0.5 md:top-4 md:left-4 md:w-0.5 md:h-full",
            completed ? "bg-primary-600 dark:bg-primary-500" : "bg-gray-300 dark:bg-gray-700"
          )}
        />}
    <button
      aria-current={selected ? "step" : undefined}
      className="group flex relative flex-col items-center w-full text-left md:flex-row md:items-start"
      onClick={onClick}
    >
      <span aria-hidden={selected ? "true" : undefined} className="flex items-center h-9">
        <span
          className={clsx(
            "flex relative z-10 justify-center items-center w-8 h-8 rounded-full",

            completed
              ? "bg-primary-600 group-hover:bg-primary-800"
              : "bg-white dark:bg-gray-700 border-2 border-gray-300 group-hover:border-gray-400 dark:border-gray-500",
            selected && !completed && "!dark:bg-gray-700 border-2 !bg-white !border-primary-500"
          )}
        >
          {completed
            ? <CheckIcon aria-hidden="true" className="w-5 h-5 text-white" />
            : <span
                className={clsx(
                  "w-2.5 h-2.5 group-hover:bg-gray-300 rounded-full",
                  selected ? "bg-primary-600 group-hover:!bg-primary-600" : "bg-transparent"
                )}
              />}
        </span>
      </span>
      <span className="flex flex-col items-center mt-2 min-w-0 md:items-start md:mt-0 md:ml-4">
        <span
          className={clsx(
            "text-[11px] font-semibold uppercase sm:text-xs sm:tracking-wide",
            selected && "!text-primary-600 !dark:text-primary-500",
            !completed && "text-gray-500 dark:text-gray-300"
          )}
        >
          {name}
        </span>
        <span className="hidden text-[13px] text-gray-500 dark:text-gray-500 md:flex">
          {description}
        </span>
      </span>
    </button>
  </li>
);
