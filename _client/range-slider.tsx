import { useDebouncedEffect } from "_client/utils/debounce";
import clsx from "clsx";
import { Dispatch, FC, ReactElement, SetStateAction, useEffect, useState } from "react";

type RangeSliderProps = {
  label: ReactElement | string;
  range: (string | number)[];
  setValue: (value: number) => void;
  value: number;
  className?: string;
  gradientEnd?: number;
  gradientStart?: number;
};
export const RangeSlider: FC<RangeSliderProps> = ({
  range,
  label,
  className,
  gradientStart = 100,
  gradientEnd = 100,
  value = 0,
  setValue,
}) => {
  const [index, setIndex] = useState(value);

  useDebouncedEffect(
    () => {
      setValue(index);
    },
    200,
    [index]
  );

  useDebouncedEffect(
    () => {
      setIndex(value);
    },
    5,
    [value]
  );

  return (
    <label className={clsx("relative flex w-full flex-col", className)}>
      <div className="-mb-1 text-sm font-medium">{label}</div>
      <div className="flex flex-col px-2">
        <input
          type="range"
          min={0}
          max={range.length - 1}
          step={1}
          value={index}
          onChange={(e) => setIndex(+e.target.value)}
          className="relative my-4 -mx-2 block h-1 cursor-pointer appearance-none rounded-full from-primary-400 to-gray-100 [--tw-gradient-via:theme(colors.green.500)] thumb:relative thumb:aspect-1 thumb:h-4 thumb:cursor-grab thumb:appearance-none thumb:rounded-full thumb:bg-primary-400 thumb:active:cursor-grabbing"
          style={{
            background: `linear-gradient(90deg, 
          var(--range-gradient-from, var(--tw-gradient-from)) 0%, 
          var(--range-gradient-from, var(--tw-gradient-from)) ${Math.min(
            gradientStart,
            (index / (range.length - 1)) * 100
          )}% ,
          var(--range-gradient-via, var(--tw-gradient-via)) ${Math.min(
            gradientEnd,
            (index / (range.length - 1)) * 100
          )}%  ${(index / (range.length - 1)) * 100}%,
          var(--range-gradient-to, var(--tw-gradient-to))  ${(index / (range.length - 1)) * 100}%,  
          var(--range-gradient-to, var(--tw-gradient-to)) 100%)`,
          }}
        />
        <div className="relative h-8">
          {range.map((num, i) => (
            <button
              key={num}
              className={clsx(
                "absolute top-0 flex -translate-x-1/2 justify-center whitespace-nowrap text-xs",
                i === index ? "text-gray-500" : "text-gray-300"
              )}
              style={{ left: `${(i / (range.length - 1)) * 100}%` }}
              onClick={() => setIndex(i)}
            >
              <span
                className={clsx(
                  "absolute top-0 h-2 w-px",
                  i === index ? "bg-gray-500" : "bg-gray-300"
                )}
              ></span>
              <span className="mt-3">{num}</span>
            </button>
          ))}
        </div>
      </div>
    </label>
  );
};
