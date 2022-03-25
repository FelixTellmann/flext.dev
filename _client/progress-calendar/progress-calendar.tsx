import { API } from "_client/hooks/trpcAPI";
import { createDateRange } from "_client/progress-calendar/_create-date-range";
import { ProgressDay } from "_client/progress-day";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretUp } from "react-icons/io5";
import ReactTooltip from "react-tooltip";
import deepEqual from "fast-deep-equal";

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
  const [userData, setUserData] = useState<{ id: string; level: number }[]>([]);
  const [weeks, setWeeks] = useState<Day[][]>(createDateRange(yearSelection));

  const { data, refetch } = API.useQuery(
    ["habits.findMany", { startsWith: yearSelection.split("-")[0] ?? "9999" }],
    { refetchOnWindowFocus: false, initialData: [] }
  );

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

  useEffect(() => {
    if (
      !deepEqual(
        userData,
        [...userData, ...(data ?? [])].filter(
          ({ id }, i, arr) => arr.findIndex((b) => b.id === id) === i
        )
      )
    ) {
      setUserData(
        [...userData, ...(data ?? [])].filter(
          ({ id }, i, arr) => arr.findIndex((b) => b.id === id) === i
        )
      );

      // setUserData([...userData, ...(data ?? [])]);
    }
  }, [data, userData]);

  return (
    <>
      <div className="relative mb-10">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-200 dark:border-dark-border" />
        </div>
        <div className="relative flex justify-center">
          <div className="bg-bg px-4 dark:bg-dark-bg">
            <button
              className=" mb-1 h-5 w-5 rounded-[3px] border border-gray-500 bg-green-300 shadow transition duration-75 h:bg-green-400 dark:border-dark-text dark:bg-dark-success dark:shadow-dark"
              onClick={toggleProgress}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col justify-end overflow-hidden transition-all",
          showProgress ? "max-h-[200px]" : "max-h-0"
        )}
      >
        <div className="flex pb-5">
          <div className="mx-auto flex justify-end overflow-hidden">
            <div
              ref={progressContainer}
              className="scrollbar-none grid auto-cols-min auto-rows-min gap-1 overflow-x-scroll"
            >
              <div className="col-start-2 flex gap-1 text-[9px]">
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
              <div className="row-start-2 mr-1 flex flex-col gap-1 text-[9px]">
                <div className="h-[11px]">Mon</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Wed</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Fri</div>
                <div className="h-[11px]" />
                <div className="h-[11px]">Sun</div>
              </div>
              <div className="col-start-2 row-start-2 flex gap-1">
                {isMounted
                  ? <>
                      {!toolTipRendered && setToolTipRendered(true)}
                      <ReactTooltip
                        html
                        backgroundColor="#24292f"
                        className="!rounded-md !rounded-[6px] !border-none !py-2 !px-4 !leading-[18px]"
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
                    {week.map(({ date, hide }) => (
                      <ProgressDay
                        key={date}
                        date={date}
                        hide={hide}
                        level={userData.find(({ id }) => id === date)?.level ?? 0}
                        selected={selected === date}
                        onClick={() => {
                          refetch();
                          handleSelectDay(date);
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 pr-2 pb-2 pl-8">
              <button
                className={clsx(
                  "inline-flex items-start rounded border py-1.5 px-2.5 text-xs font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2022
                    ? "border-transparent bg-indigo-500 text-white hover:bg-indigo-700"
                    : "border-gray-300 hover:bg-indigo-100"
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
                  "inline-flex items-start rounded border py-1.5 px-2.5 text-xs font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2021
                    ? "border-transparent bg-indigo-500 text-white hover:bg-indigo-700"
                    : "border-gray-300 hover:bg-indigo-100"
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
                  "inline-flex items-start rounded border py-1.5 px-2.5 text-xs font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:min-w-[80px]",
                  new Date(yearSelection).getFullYear() === 2020
                    ? "border-transparent bg-indigo-500 text-white hover:bg-indigo-700"
                    : "border-gray-300 hover:bg-indigo-100"
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
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-200 dark:border-dark-border" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-bg px-4 dark:bg-dark-bg">
              <button
                className="text-2xl text-gray-500 transition duration-75 h:text-gray-700"
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
};
