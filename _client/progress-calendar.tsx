import { ProgressDay } from "_client/progress-day";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretUp } from "react-icons/io5";
import ReactTooltip from "react-tooltip";

type ProgressCalendarProps = {
  handleSelectDay: (date: string) => void;
  selected?: string;
};

export const ProgressCalendar: FC<ProgressCalendarProps> = ({ handleSelectDay, selected }) => {
  const [isMounted, setMount] = useState(false);
  const progressContainer = useRef<HTMLDivElement>(null);
  const [toolTipRendered, setToolTipRendered] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  const [yearSelection, setYearSelection] = useState(new Date().toISOString().split("T")[0]);
  const [weeks, setWeeks] = useState<Day[][]>(createDateRange(yearSelection));

  const toggleProgress = useCallback(() => {
    setShowProgress((current) => !current);
  }, []);

  useEffect(() => {
    if (toolTipRendered) {
      ReactTooltip.rebuild();
    }
  }, [toolTipRendered, weeks]);

  useEffect(() => {
    setMount(true);
    if (progressContainer.current !== null) {
      progressContainer.current.scrollLeft = progressContainer.current.scrollWidth;
    }
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
            <div
              ref={progressContainer}
              className="grid overflow-x-scroll auto-cols-min auto-rows-min gap-1 scrollbar-none"
            >
              <div className="flex col-start-2 gap-1 text-[9px]">
                {weeks.map((week) => {
                  const monday = new Date(week[0].date);
                  if (monday.getDate() >= 1 && monday.getDate() < 8) {
                    return (
                      <div key={monday.toISOString()} className="w-[11px]">
                        {new Date(week[6].date).toLocaleDateString("en-US", {
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
                {isMounted
                  ? <>
                      {!toolTipRendered && setToolTipRendered(true)}
                      <ReactTooltip
                        html
                        backgroundColor="#24292f"
                        className="!py-2 !px-4 !leading-[18px] !rounded-md !rounded-[6px] !border-none"
                        overridePosition={(position, currentEvent, currentTarget, ref, place) => {
                          const block = (currentTarget as HTMLElement).getBoundingClientRect();
                          const { width, height } = (ref as HTMLElement).getBoundingClientRect();
                          switch (place) {
                            case "top":
                              return {
                                left: 11 / 2 + block.left - width / 2,
                                top: block.top - 33,
                              };
                            case "right":
                              return {
                                left: block.left + 10,
                                top: 11 / 2 + block.top - height / 2,
                              };
                            case "left":
                              return {
                                left: block.right + 10,
                                top: 11 / 2 + block.top - height / 2,
                              };
                            case "bottom": {
                              return {
                                left: 11 / 2 + block.left - width / 2,
                                top: block.bottom,
                              };
                            }
                          }
                        }}
                      />
                    </>
                  : null}

                {weeks.map((week, i) => (
                  <div key={`${week[0].date}_${i}`} className="flex flex-col gap-1">
                    {week.map(({ date, level, hide }) => (
                      <ProgressDay
                        key={date}
                        date={date}
                        hide={hide}
                        level={level}
                        selected={selected === date}
                        onClick={() => handleSelectDay(date)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 pr-2 pb-2 pl-8">
              <button
                className={clsx(
                  "inline-flex items-start py-1.5 px-2.5 text-xs font-medium rounded border focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2022
                    ? "text-white bg-indigo-500 hover:bg-indigo-700 border-transparent"
                    : "hover:bg-indigo-100 border-gray-300"
                )}
                type="button"
                onClick={() => {
                  setYearSelection("2022-12-31");
                  setWeeks(createDateRange("2022-12-31", true));
                }}
              >
                2022
              </button>
              <button
                className={clsx(
                  "inline-flex items-start py-1.5 px-2.5 text-xs font-medium rounded border focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2021
                    ? "text-white bg-indigo-500 hover:bg-indigo-700 border-transparent"
                    : "hover:bg-indigo-100 border-gray-300"
                )}
                type="button"
                onClick={() => {
                  setYearSelection("2021-12-31");
                  setWeeks(createDateRange("2021-12-31", true));
                }}
              >
                2021
              </button>
              <button
                className={clsx(
                  "inline-flex items-start py-1.5 px-2.5 text-xs font-medium rounded border focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2020
                    ? "text-white bg-indigo-500 hover:bg-indigo-700 border-transparent"
                    : "hover:bg-indigo-100 border-gray-300"
                )}
                type="button"
                onClick={() => {
                  setYearSelection("2020-12-31");
                  setWeeks(createDateRange("2020-12-31", true));
                }}
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
};

export type Day = {
  date: string;
  hide: boolean;
  level: number;
};

export const createDateRange = (
  originalDate: string = new Date().toISOString().split("T")[0],
  year = false
): Day[][] => {
  let date = new Date(originalDate);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  if (date.getDay() !== 0) {
    date.setDate(date.getDate() + (7 - date.getDay()));
  }

  date.setDate(date.getDate() - 7 * 53 + 1);

  const weeks: Day[][] = [];
  for (let i = 0; i < 53; i++) {
    weeks[i] = [];
    for (let j = 0; j < 7; j++) {
      if (year) {
        if (date.getFullYear() !== new Date(originalDate).getFullYear()) {
          weeks[i][j] = {
            date: `${date.toISOString().split("T")[0]}`,
            level: 0,
            hide: true,
          };
          date.setDate(date.getDate() + 1);
          continue;
        }
      }
      weeks[i][j] = {
        date: `${date.toISOString().split("T")[0]}`,
        level: 0,
        hide: false,
      };
      date.setDate(date.getDate() + 1);
    }
  }

  return weeks;
};
