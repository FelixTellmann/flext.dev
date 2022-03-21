import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { FC, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretDown, IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

type HabitDateTimeProps = {
  id: string;
  label: string;
  setValue: (val: Date) => void;
  value: Date;
  hour?: boolean;
  hour12?: boolean | undefined;
  info?: string;
  minute?: boolean;
  second?: boolean;
};

const clamp = (val: number, min: number, max: number) => {
  return val > max ? max : val < min ? min : val;
};

export const HabitTimeSelector: FC<HabitDateTimeProps> = ({
  id,
  label,
  setValue,
  value,
  info,
  hour,
  minute,
  second,
  hour12,
}) => {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const [hour12Select, setHour12Select] = useState(
    value.toLocaleString("en-US", { hour12: true }).includes("AM") ? "AM" : "PM"
  );
  const [hours, setHours] = useState(
    (hour12 ? (value.getHours() > 12 ? value.getHours() - 12 : value.getHours()) : value.getHours())
      .toString()
      .padStart(2, "0")
  );
  const [minutes, setMinutes] = useState(value.getMinutes().toString().padStart(2, "0"));
  const [seconds, setSeconds] = useState(value.getSeconds().toString().padStart(2, "0"));

  const handleHourChange = useCallback((e) => {
    setHours((val) => e.target.value.replace(/[^\d]/gi, ""));
  }, []);

  const handleMinuteChange = useCallback((e) => {
    setMinutes((val) => e.target.value.replace(/[^\d]/gi, ""));
  }, []);

  const handleSecondChange = useCallback((e) => {
    setSeconds((val) => e.target.value.replace(/[^\d]/gi, ""));
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === ":") {
      e.preventDefault();
      if (hoursRef.current === document.activeElement) {
        minutesRef.current?.focus();
      }
      if (minutesRef.current === document.activeElement) {
        secondsRef.current?.focus();
      }
    }
  }, []);

  const handleBlur = useCallback(() => {
    const newSeconds = +seconds % 60;
    const newMinutes = (+minutes + Math.floor(+seconds / 60)) % 60;
    const newHours = clamp(+hours + Math.floor((+minutes + Math.floor(+seconds / 60)) / 60), 0, 23);
    const pmHours = hour12 && hour12Select === "PM" && +hours < 12 ? 12 : 0;
    setValue(new Date(value.setHours(newHours + pmHours, newMinutes, newSeconds)));
  }, [hour12, hour12Select, hours, minutes, seconds, setValue, value]);

  const handleSelectChange = useCallback((e) => {
    setValue(
      new Date(
        value.setHours(value.getHours() < 12 ? value.getHours() + 12 : value.getHours() - 12)
      )
    );
  }, [setValue, value]);

  useEffect(() => {
    setHours((val) =>
      (hour12
        ? value.getHours() > 12
          ? value.getHours() - 12
          : value.getHours()
        : value.getHours()
      )
        .toString()
        .padStart(2, "0")
    );
    setMinutes((val) => value.getMinutes().toString().padStart(2, "0"));
    setSeconds((val) => value.getSeconds().toString().padStart(2, "0"));
    setHour12Select((val) =>
      value.toLocaleString("en-US", { hour12: true }).includes("AM") ? "AM" : "PM"
    );
  }, [hour12, value]);

  return (
    <label className="flex relative items-start">
      <div className="flex-1 min-w-0 text-sm">
        <div className="font-medium text-gray-700 dark:text-dark-text select-none">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="flex items-center ml-4">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="flex py-0 text-sm text-right rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <div className="pl-1" />
            {hour
              ? <input
                  ref={hoursRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="p-1 my-1 w-[26px] text-sm text-center rounded-sm focus:border-transparent border-none"
                  style={{ boxShadow: "none" }}
                  type="text"
                  value={hours}
                  onBlur={handleBlur}
                  onChange={handleHourChange}
                  onKeyDown={handleKeyDown}
                />
              : null}
            {hour && minute ? <div className="flex items-center py-1 my-1">:</div> : null}
            {minute
              ? <input
                  ref={minutesRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="p-1 my-1 w-[26px] text-sm text-center rounded-sm focus:border-transparent border-none"
                  style={{ boxShadow: "none" }}
                  type="text"
                  value={minutes}
                  onBlur={handleBlur}
                  onChange={handleMinuteChange}
                  onKeyDown={handleKeyDown}
                />
              : null}
            {minute && second ? <div className="flex items-center py-1 my-1">:</div> : null}
            {second
              ? <input
                  ref={secondsRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="p-1 my-1 w-[26px] text-sm text-center rounded-sm focus:border-transparent border-none"
                  style={{ boxShadow: "none" }}
                  type="text"
                  value={seconds}
                  onBlur={handleBlur}
                  onChange={handleSecondChange}
                  onKeyDown={handleKeyDown}
                />
              : null}
            <div className="pl-1" />
            {hour12
              ? <div className="bg-gray-50 rounded-r-md border-l border-l-gray-300">
                  <select
                    className="py-0 pr-7 pl-2 h-[38px] text-xs text-gray-500 bg-gray-50 bg-transparent rounded-r-md border-transparent focus:border-indigo-500 focus:ring-indigo-500"
                    id="currency"
                    name="currency"
                    value={hour12Select}
                    onChange={handleSelectChange}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              : null}
          </div>
        </div>
      </div>
    </label>
  );
};
