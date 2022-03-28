import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import { IoCaretDown, IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

type HabitNumberProps = {
  id: string;
  label: string;
  setValue: (val: string) => void;
  value: string;
  float?: boolean;
  info?: string;
  max?: number;
  min?: number;
  placeholder?: string;
  unit?: string;
};

export const HabitNumber: FC<HabitNumberProps> = ({
  id,
  label,
  setValue,
  value,
  float,
  info,
  placeholder,
  unit,
  min,
  max,
}) => {
  return (
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="select-none font-medium text-gray-700 dark:text-dark-text">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="ml-4 flex items-center">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            className={clsx(
              "top-0 right-0 bottom-0 flex w-full rounded-md border-gray-300 pl-4 text-right",
              "py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500",
              unit ? "pr-12" : "pr-7"
            )}
            placeholder={placeholder}
            style={{
              width: `calc(${value.length * 0.608}em + ${unit ? "3rem" : "1.75rem"} + 1rem + 1px)`,
              minWidth: `calc(${4 * 0.608}em + ${unit ? "3rem" : "1.75rem"} + 1rem + 1px)`,
            }}
            type="text"
            value={value}
            onBlur={() => setValue((+value).toFixed(2))}
            onChange={(e) => {
              setValue(e.target.value.replace(/[^\d.,]/gi, ""));
            }}
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-1">
            <button
              className="absolute top-[3px] right-[3px] flex justify-center rounded-[3px] bg-gray-200 py-[2px] px-1 text-[11px] text-gray-500 transition-colors h:bg-gray-300"
              onClick={() => setValue((+value + 0.1).toFixed(2))}
            >
              <IoCaretUpOutline />
            </button>
            <button
              className="absolute right-[3px] bottom-[3px] flex justify-center rounded-[3px] bg-gray-200 py-[2px] px-1 text-[11px] text-gray-500 transition-colors h:bg-gray-300"
              onClick={() => setValue((+value - 0.1).toFixed(2))}
            >
              <IoCaretDownOutline />
            </button>
          </div>
          {unit
            ? <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-7">
                <span className="text-[13px] text-gray-500" id="price-currency">
                  {unit}
                </span>
              </div>
            : null}
        </div>
      </div>
    </label>
  );
};
