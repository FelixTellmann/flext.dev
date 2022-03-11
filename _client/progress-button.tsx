import { CheckIcon } from "@heroicons/react/solid";
import clsx from "clsx";

type Status = "complete" | "current" | "upcoming";

export type Steps = { description: string; name: string; status: Status };
function ProgressStepLine({ status }: { status: Status }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full ",
        {
          complete: "bg-indigo-600",
          current: "bg-gray-300",
          upcoming: "bg-gray-300",
        }[status]
      )}
    />
  );
}

const ProgressStepItemIcon = ({ status }: { status: Status }) => {
  return {
    complete: <CheckIcon aria-hidden="true" className="w-5 h-5 text-white" />,
    current: <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />,
    upcoming: <span className="w-2.5 h-2.5 bg-transparent group-hover:bg-gray-300 rounded-full" />,
  }[status];
};

export const ProgressButton = (props: { onClick: any; step: Steps; isLast?: boolean }) => (
  <li className={clsx(props.isLast ? "" : "pb-10", "relative")}>
    {props.isLast ? null : <ProgressStepLine status={props.step.status} />}
    <button
      aria-current={props.step.status === "current" ? "step" : undefined}
      className="group flex relative items-start text-left"
      onClick={props.onClick}
    >
      <span
        aria-hidden={props.step.status === "current" ? "true" : undefined}
        className="flex items-center h-9"
      >
        <span
          className={clsx(
            "flex relative z-10 justify-center items-center w-8 h-8 rounded-full",
            {
              complete: "bg-indigo-600 group-hover:bg-indigo-800",
              current: "bg-white border-2 border-indigo-600",
              upcoming: "bg-white group-hover:border-gray-400 border-2 border-gray-300",
            }[props.step.status]
          )}
        >
          <ProgressStepItemIcon status={props.step.status} />
        </span>
      </span>
      <span className="flex flex-col ml-4 min-w-0">
        <span
          className={clsx(
            "text-xs font-semibold tracking-wide uppercase",
            {
              complete: "",
              current: "text-indigo-600",
              upcoming: "text-gray-500",
            }[props.step.status]
          )}
        >
          {props.step.name}
        </span>
        <span className="text-[13px] text-gray-500">{props.step.description}</span>
      </span>
    </button>
  </li>
);
