import { CheckIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC } from "react";

export type ProgressButtonProps = {
  completed: boolean;
  onClick: () => void;
  selected: boolean;
  title: string;
  description?: string;
  last?: boolean;
};

export const ProgressButton: FC<ProgressButtonProps> = ({
  completed,
  description,
  title,
  onClick,
  selected,
  last,
}) => (
  <li className={clsx(last ? "" : "pb-10", "relative")}>
    {last
      ? null
      : <div
          aria-hidden="true"
          className={clsx(
            "absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full ",
            completed ? "bg-primary-600 dark:bg-primary-500" : "bg-gray-300 dark:bg-gray-700"
          )}
        />}
    <button
      aria-current={selected ? "step" : undefined}
      className="group flex relative items-start text-left"
      onClick={onClick}
    >
      <span aria-hidden={selected ? "true" : undefined} className="flex items-center h-9">
        <span
          className={clsx(
            "flex relative z-10 justify-center items-center w-8 h-8 rounded-full",

            completed
              ? "bg-primary-600 group-hover:bg-primary-800"
              : "bg-white dark:bg-gray-700 border-2 border-gray-300 group-hover:border-gray-400 dark:border-gray-500",
            selected && !completed && "!bg-white !dark:bg-gray-700 border-2 !border-primary-500"
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
      <span className="flex flex-col ml-4 min-w-0">
        <span
          className={clsx(
            "text-xs font-semibold tracking-wide uppercase",
            selected && "!text-primary-600 !dark:text-primary-500",
            !completed && "text-gray-500 dark:text-gray-300"
          )}
        >
          {title}
        </span>
        <span className="text-[13px] text-gray-500 dark:text-gray-500">{description}</span>
      </span>
    </button>
  </li>
);
