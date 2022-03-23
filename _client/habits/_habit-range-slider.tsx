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
    <label className="flex relative items-start">
      <div className="flex-1 min-w-0 text-sm">
        <div className="font-medium text-gray-700 dark:text-dark-text select-none">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="flex flex-col mt-3">
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
        <output className="relative mx-2 w-[calc(100%-16px)] h-1 opacity-0 peer-active:opacity-100 delay-75 pointer-events-none">
          <div
            className="flex absolute -top-12 justify-center items-center p-2 w-7 h-7 text-xs bg-white rounded border border-gray-300 border-solid shadow-md -translate-x-1/2 pointer-events-none peer-active:pointer-events-auto range-output"
            style={{ left: `calc(${((value - min) / (max - min)) * 100}%)` }}
          >
            {value}
          </div>
        </output>
        <div className="flex justify-between px-1 mt-2 text-xs">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </label>
  );
};
