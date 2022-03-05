import { Boundary } from "@floating-ui/dom";
import { offset, shift, useFloating, autoPlacement, flip, arrow } from "@floating-ui/react-dom";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretUp } from "react-icons/io5";

export type Weeks = {
  date: string;
  status: "incomplete" | "complete";
}[][];

const createDateRange = (date: Date = new Date()): Weeks => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  if (date.getDay() !== 0) {
    date.setDate(date.getDate() + (7 - date.getDay()));
  }

  date.setDate(date.getDate() - 7 * 53 + 1);

  const weeks = [];
  for (let i = 0; i < 53; i++) {
    weeks[i] = [];
    for (let j = 0; j < 7; j++) {
      weeks[i][j] = {
        date: `${date.toISOString().split("T")[0]}`,
        status: "incomplete",
      };
      date.setDate(date.getDate() + 1);
    }
  }

  return weeks;
};

const ProgressDay: FC<{ boundary; date: string; status: "incomplete" | "complete" }> = ({
  date,
  status,
  boundary,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const arrowRef = useRef<HTMLDivElement>();

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    middlewareData: {
      offset: { x: offsetX, y: offsetY } = {},
      arrow: { x: arrowX, y: arrowY, centerOffset } = {},
    },
  } = useFloating({
    placement: "top",
    middleware: [
      offset({ crossAxis: -75, mainAxis: 38 }),
      shift({
        padding: {
          top: -75,
          bottom: -75,
          left: 22,
          right: 22,
        },
        boundary,
        rootBoundary: "document",
      }),
      flip({
        rootBoundary: "document",
      }),
      arrow({ element: arrowRef }),
    ],
  });

  console.log({ arrowX, offsetX, arrowY, offsetY, centerOffset });
  return (
    <>
      <button
        ref={reference}
        className={clsx(
          "w-[11px] h-[11px] bg-zinc-200 rounded-[2px] border border-gray-300",
          date === new Date().toISOString().split("T")[0] && "bg-green-200/50 border-dark-success"
        )}
        tabIndex={-1}
        onBlur={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      <div
        ref={floating}
        className="flex justify-center py-2 px-3 w-[170px] text-xs text-white whitespace-nowrap bg-gray-800 rounded shadow"
        style={{
          display: showTooltip ? "" : "none",
          position: strategy,
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        <div
          ref={arrowRef}
          className="absolute w-2 h-2 bg-gray-800 rotate-45 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(arrowX ?? 0) + centerOffset}px`,
            top: offsetY > 0 ? "0px" : "100%",
          }}
        />
        {new Date(date).toLocaleDateString(undefined, {
          weekday: "long",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>
    </>
  );
};

export function ProgressCalendar() {
  const [showProgress, setShowProgress] = useState(true);
  const boundary = useRef();
  const [yearSelection, setYearSelection] = useState(new Date().toISOString().split("T")[0]);
  const [weeks, setWeeks] = useState(createDateRange());

  const toggleProgress = useCallback(() => {
    setShowProgress((current) => !current);
  }, []);

  return (
    <>
      <div className="relative mb-10">
        <div aria-hidden="true" className="flex absolute inset-0 items-center">
          <div className="w-full border-b border-gray-200 dark:border-dark-border" />
        </div>
        <div className="flex relative justify-center">
          <div className="px-4 bg-bg dark:bg-dark-bg">
            <button
              className=" mb-1 w-5 h-5 bg-green-300 h:bg-green-400 dark:bg-dark-success rounded-[3px] border border-gray-500 dark:border-dark-text shadow dark:shadow-dark transition duration-75"
              onClick={toggleProgress}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex overflow-hidden flex-col justify-end transition-all",
          showProgress ? "max-h-[200px]" : "max-h-0"
        )}
      >
        <div className="flex pb-5">
          <div className="flex overflow-hidden justify-end mx-auto">
            <div ref={boundary} className="grid auto-cols-min auto-rows-min gap-1">
              <div className="flex col-start-2 gap-1 text-[9px]">
                {weeks.map((week) => {
                  const monday = new Date(week[0].date);
                  if (monday.getDate() >= 1 && monday.getDate() < 8) {
                    return (
                      <div key={monday.toISOString()} className="w-[11px]">
                        {new Date(week[6].date).toLocaleDateString(undefined, {
                          month: "short",
                        })}
                      </div>
                    );
                  }
                  return <div key={week[6].date} className="w-[11px]" />;
                })}
              </div>
              <div className="flex flex-col row-start-2 gap-1 mr-1 text-[9px]">
                <div className="h-[11px]">Mon</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Wed</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Fri</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Sun</div>
              </div>
              <div className="flex col-start-2 row-start-2 gap-1">
                {weeks.map((week, i) => (
                  <div key={`${week[0].date}_${i}`} className="flex flex-col gap-1">
                    {week.map(({ date, status }) => (
                      <ProgressDay
                        key={date}
                        boundary={boundary.current}
                        date={date}
                        status={status}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 pr-2 pb-2 pl-8">
              <button
                className="inline-flex items-start py-1.5 px-2.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none sm:min-w-[80px]"
                type="button"
              >
                2022
              </button>
              <button
                className="inline-flex items-start py-1.5 px-2.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:min-w-[80px]"
                type="button"
              >
                2021
              </button>
              <button
                className="inline-flex items-start py-1.5 px-2.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:min-w-[80px]"
                type="button"
              >
                2020
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="flex absolute inset-0 items-center">
            <div className="w-full border-b border-gray-200 dark:border-dark-border" />
          </div>
          <div className="flex relative justify-center">
            <div className="px-4 bg-bg dark:bg-dark-bg">
              <button
                className="text-2xl text-gray-500 h:text-gray-700 transition duration-75"
                onClick={toggleProgress}
              >
                <IoCaretUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
