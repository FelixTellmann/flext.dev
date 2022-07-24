import { Charts } from "_client/charts/charts";
import { HeroIcon } from "_client/dynamic-hero-icon";
import { RangeSlider } from "_client/range-slider";
import clsx from "clsx";
import { FC, useRef, useState } from "react";
import { getFormattedDate, getFormattedFullDate, getFormattedYearAndMonth, getFullMonthDates, getNextMonth, getOverlappingMonthDates, getPreviousMonth, getWeek, isCurrentMonth } from "utils/dates";

type DailyProps = {};

type DailyDetail = {
  alcohol: number;
  exerciseDuration: number;
  exerciseIntensity: number;
  foodHealthiness: number;
  foodQuantity: number;
};

export const Daily: FC<DailyProps> = ({}) => {
  const currentDate = useRef(Date.now());
  const [selectedDate, setSelectedDate] = useState(currentDate.current);
  const [data, setData] = useState<Record<string, DailyDetail>>(
    getOverlappingMonthDates(selectedDate).reduce(
      (acc, date) => {
        acc[getFormattedFullDate(date)] = {
          exerciseDuration: 0,
          exerciseIntensity: 0,
          foodHealthiness: 0,
          foodQuantity: 0,
          alcohol: 0,
        };
        return acc;
      },
      {}
    )
  );

  return (
    <div className="mx-auto flex max-w-8xl flex-col gap-16 px-4 py-8">
      {/*<h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">Daily Tracking</h1>*/}
      <section className="relative h-[290px] ">
        <Charts
          barData={getFullMonthDates(selectedDate).map((num) => {
            return {
              date: getFormattedDate(num),
              ...data[getFormattedFullDate(num)],
            };
          })}
        />
      </section>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 divide-x">
        <section className=" ml-auto mr-14 w-full max-w-xs">
          <header className="flex items-center">
            <h2 className="flex-auto font-semibold text-gray-900">
              {getFormattedYearAndMonth(selectedDate)}
            </h2>
            <button
              type="button"
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-800"
              onClick={() => setSelectedDate(getPreviousMonth)}
            >
              <span className="sr-only">Previous month</span>
              <HeroIcon name="ChevronLeftIcon" className="h-5 w-5" />
            </button>
            <button
              type="button"
              className={clsx(
                "-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 ",
                isCurrentMonth(selectedDate, currentDate.current)
                  ? "cursor-not-allowed text-gray-300"
                  : "text-gray-400 hover:text-gray-800"
              )}
              onClick={() => setSelectedDate((num) => getNextMonth(num, currentDate.current))}
              disabled={isCurrentMonth(selectedDate, currentDate.current)}
            >
              <span className="sr-only">Next month</span>
              <HeroIcon name="ChevronRightIcon" className="h-5 w-5" />
            </button>
          </header>
          <main>
            <div className="mt-10 grid select-none grid-cols-7 text-center text-xs leading-6 text-gray-500">
              {getWeek(selectedDate).map((num) => (
                <div key={num}>
                  {new Date(num).toLocaleString("en-GB", { weekday: "short" }).substring(0, 1)}
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm ">
              {getOverlappingMonthDates(selectedDate).map((num, index) => {
                const isSelected = getFormattedFullDate(num) === getFormattedFullDate(selectedDate);
                const isToday =
                  getFormattedFullDate(num) === getFormattedFullDate(currentDate.current);
                const isCurrentMonthDate = isCurrentMonth(num, selectedDate);
                const isFutureDate = num > currentDate.current;
                return (
                  <div className={clsx("py-2", index > 6 && "border-t border-gray-200")} key={num}>
                    <button
                      type="button"
                      onClick={() => setSelectedDate(num)}
                      disabled={isFutureDate}
                      className={clsx(
                        isFutureDate && "cursor-not-allowed text-gray-400",
                        isSelected && "text-white",
                        !isSelected && isToday && "text-primary-500",
                        !isSelected && !isToday && isCurrentMonthDate && "text-gray-900",
                        !isSelected && !isToday && !isCurrentMonthDate && "text-gray-400",
                        isSelected && isToday && "bg-primary-500",
                        isSelected && !isToday && "bg-gray-900",
                        !isSelected && !isFutureDate && "hover:bg-gray-200",
                        (isSelected || isToday) && "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={getFormattedFullDate(num)}>{getFormattedDate(num)}</time>
                    </button>
                  </div>
                );
              })}
            </div>
          </main>
        </section>
        <section className="flex flex-col gap-4 pl-14">
          <header className="flex items-center">
            <h2 className="flex-auto font-semibold text-gray-900">
              {new Date(selectedDate).toLocaleDateString("en-GB", {
                dateStyle: "full",
              })}
            </h2>
          </header>
          <RangeSlider
            className="[--range-gradient-from:theme(colors.red.400)]"
            label="Exercise Duration"
            range={["0m", "30m", "45m", "60m", "75m", "90m", "2h", "2.5h", "3h+"]}
            gradientStart={5}
            gradientEnd={25}
            value={data[getFormattedFullDate(selectedDate)]?.exerciseDuration ?? 0}
            setValue={(value) =>
              setData((currentData) => ({
                ...currentData,
                [getFormattedFullDate(selectedDate)]: {
                  ...data[getFormattedFullDate(selectedDate)],
                  exerciseDuration: value,
                },
              }))
            }
          />

          <RangeSlider
            className="[--range-gradient-from:theme(colors.red.400)]"
            label="Exercise Intensity"
            range={["low", "walk", "hike", "run", "intense run"]}
            gradientStart={10}
            gradientEnd={40}
            value={data[getFormattedFullDate(selectedDate)]?.exerciseIntensity ?? 0}
            setValue={(value) =>
              setData((currentData) => ({
                ...currentData,
                [getFormattedFullDate(selectedDate)]: {
                  ...data[getFormattedFullDate(selectedDate)],
                  exerciseIntensity: value,
                },
              }))
            }
          />
          <RangeSlider
            className="[--range-gradient-from:theme(colors.red.400)]"
            label="Food Healthiness"
            range={["very unhealthy", "unhealthy", "neutral", "healthy", "very healthy"]}
            gradientStart={30}
            gradientEnd={60}
            value={data[getFormattedFullDate(selectedDate)]?.foodHealthiness ?? 0}
            setValue={(value) =>
              setData((currentData) => ({
                ...currentData,
                [getFormattedFullDate(selectedDate)]: {
                  ...data[getFormattedFullDate(selectedDate)],
                  foodHealthiness: value,
                },
              }))
            }
          />
          <RangeSlider
            className="[--range-gradient-from:theme(colors.green.500)] [--range-gradient-via:theme(colors.red.500)]"
            label="Food Quantity"
            range={["small", "medium", "large", "overeaten"]}
            gradientStart={30}
            gradientEnd={70}
            value={data[getFormattedFullDate(selectedDate)]?.foodQuantity ?? 0}
            setValue={(value) =>
              setData((currentData) => ({
                ...currentData,
                [getFormattedFullDate(selectedDate)]: {
                  ...data[getFormattedFullDate(selectedDate)],
                  foodQuantity: value,
                },
              }))
            }
          />

          <RangeSlider
            className="[--range-gradient-from:theme(colors.green.500)] [--range-gradient-via:theme(colors.red.500)]"
            label="Alcohol"
            range={["none", "1 small drink", "2-3 drinks", "4+ drinks"]}
            gradientStart={15}
            gradientEnd={50}
            value={data[getFormattedFullDate(selectedDate)]?.alcohol ?? 0}
            setValue={(value) =>
              setData((currentData) => ({
                ...currentData,
                [getFormattedFullDate(selectedDate)]: {
                  ...data[getFormattedFullDate(selectedDate)],
                  alcohol: value,
                },
              }))
            }
          />
        </section>
      </div>
    </div>
  );
};

export default Daily;
