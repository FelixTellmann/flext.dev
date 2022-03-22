import { RangeSlider } from "@shopify/polaris";
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
      <div className="flex flex-col">
        <input
          className="range"
          max={max}
          min={min}
          step={step}
          type="range"
          onChange={(e) => setValue(+e.target.value)}
        />
        <output className="range-output">
          <div>
            <span>{value}</span>
          </div>
        </output>
        <div className="flex justify-between px-1 text-xs">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </label>
  );
};
