import { FC } from "react";

type HabitRangeSliderProps = {
  id: string;
  label: string;
  max: number;
  min: number;
  setValue: (val: number) => void;
  step: number;
  type: "range";
  unit: string;
  value: number;
  info?: string;
};

export const HabitRangeSlider: FC<HabitRangeSliderProps> = ({
  label,
  max,
  min,
  step,
  unit,
  setValue,
  value,
  info,
}) => {
  return (
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="select-none font-medium text-gray-700 dark:text-dark-text">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="mt-3 flex flex-col">
        <input
          className="range peer"
          max={max}
          min={min}
          step={step}
          // @ts-ignore
          style={{ "--range-progress": `${((value - min) / (max - min)) * 100}%` }}
          type="range"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <output className="pointer-events-none relative mx-2 h-1 w-[calc(100%-16px)] opacity-0 delay-75 peer-active:opacity-100">
          <div
            className="range-output pointer-events-none absolute -top-12 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded border border-solid border-gray-300 bg-white p-2 text-xs shadow-md peer-active:pointer-events-auto"
            style={{ left: `calc(${((value - min) / (max - min)) * 100}%)` }}
          >
            {value}
          </div>
        </output>
        <div className="mt-2 flex justify-between px-1 text-xs">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </label>
  );
};
