import { CheckIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC } from "react";

export type ProgressButtonProps = {
  completed: boolean;
  name: string;
  nextCompleted: boolean;
  nextSelected: boolean;
  onClick: () => void;
  selected: boolean;
  description?: string;
  isLast?: boolean;
};

export const ProgressButton: FC<ProgressButtonProps> = ({
  completed,
  nextCompleted,
  nextSelected,
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
            "absolute top-4 left-1/2 mt-0.5 -ml-px h-0.5 w-full md:top-4 md:left-4 md:h-full md:w-0.5",
            (completed && nextSelected) || nextCompleted
              ? "bg-primary-600 dark:bg-primary-500"
              : "bg-gray-300 dark:bg-gray-700"
          )}
        />}
    <button
      aria-current={selected ? "step" : undefined}
      className="group relative flex w-full flex-col items-center text-left md:flex-row md:items-start"
      onClick={onClick}
    >
      <span aria-hidden={selected ? "true" : undefined} className="flex h-9 items-center">
        <span
          className={clsx(
            "relative z-10 flex h-8 w-8 items-center justify-center rounded-full",

            completed
              ? "bg-primary-600 group-hover:bg-primary-800"
              : "border-2 border-gray-300 bg-white group-hover:border-gray-400 dark:border-gray-500 dark:bg-gray-700",
            selected && !completed && "!dark:bg-gray-700 border-2 !border-primary-500 !bg-white"
          )}
        >
          {completed
            ? <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
            : <span
                className={clsx(
                  "h-2.5 w-2.5 rounded-full group-hover:bg-gray-300",
                  selected ? "bg-primary-600 group-hover:!bg-primary-600" : "bg-transparent"
                )}
              />}
        </span>
      </span>
      <span className="mt-2 flex min-w-0 flex-col items-center md:mt-0 md:ml-4 md:items-start">
        <span
          className={clsx(
            "text-[11px] font-semibold uppercase sm:text-xs sm:tracking-wide",
            selected && "!dark:text-primary-500 !text-primary-600",
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
