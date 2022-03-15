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
    <label className="flex relative items-start">
      <div className="flex-1 min-w-0 text-sm">
        <div className="font-medium text-gray-700 dark:text-dark-text select-none">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="flex items-center ml-4">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            className={clsx(
              "flex top-0 right-0 bottom-0 pl-4 w-full text-right rounded-md border-gray-300",
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
              console.log();
              setValue(e.target.value.replace(/[^\d.,]/gi, ""));
            }}
          />

          <div className="flex absolute inset-y-0 right-0 items-center pr-1">
            <button
              className="flex absolute top-[3px] right-[3px] justify-center py-[2px] px-1 text-[11px] text-gray-500 bg-gray-200 h:bg-gray-300 rounded-[3px] transition-colors"
              onClick={() => setValue((+value + 0.1).toFixed(2))}
            >
              <IoCaretUpOutline />
            </button>
            <button
              className="flex absolute right-[3px] bottom-[3px] justify-center py-[2px] px-1 text-[11px] text-gray-500 bg-gray-200 h:bg-gray-300 rounded-[3px] transition-colors"
              onClick={() => setValue((+value - 0.1).toFixed(2))}
            >
              <IoCaretDownOutline />
            </button>
          </div>
          {unit
            ? <div className="flex absolute inset-y-0 right-0 items-center pr-7 pointer-events-none">
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
