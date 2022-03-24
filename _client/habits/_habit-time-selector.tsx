import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IoMdTimer } from "react-icons/io";

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
    <label className="relative flex items-start">
      <div className="min-w-0 flex-1 text-sm">
        <div className="select-none font-medium text-gray-700 dark:text-dark-text">{label}</div>
        {info ? <p className="mt-1 text-gray-500 ">{info}</p> : null}
      </div>
      <div className="ml-4 flex items-center">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="flex rounded-md border border-gray-300 py-0 text-right text-sm focus:border-indigo-500 focus:ring-indigo-500">
            <div className="pl-1" />
            {hour
              ? <input
                  ref={hoursRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="my-1 w-[26px] rounded-sm border-none p-1 text-center text-sm focus:border-transparent"
                  style={{ boxShadow: "none" }}
                  type="text"
                  value={hours}
                  onBlur={handleBlur}
                  onChange={handleHourChange}
                  onKeyDown={handleKeyDown}
                />
              : null}
            {hour && minute ? <div className="my-1 flex items-center py-1">:</div> : null}
            {minute
              ? <input
                  ref={minutesRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="my-1 w-[26px] rounded-sm border-none p-1 text-center text-sm focus:border-transparent"
                  style={{ boxShadow: "none" }}
                  type="text"
                  value={minutes}
                  onBlur={handleBlur}
                  onChange={handleMinuteChange}
                  onKeyDown={handleKeyDown}
                />
              : null}
            {minute && second ? <div className="my-1 flex items-center py-1">:</div> : null}
            {second
              ? <input
                  ref={secondsRef}
                  aria-autocomplete="none"
                  autoComplete="off"
                  className="my-1 w-[26px] rounded-sm border-none p-1 text-center text-sm focus:border-transparent"
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
              ? <div className="rounded-r-md border-l border-l-gray-300 bg-gray-50">
                  <select
                    className="h-[38px] rounded-r-md border-transparent bg-gray-50 bg-transparent py-0 pr-7 pl-2 text-xs text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    value={hour12Select}
                    onChange={handleSelectChange}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              : <div className="rounded-r-md border-l border-l-gray-300 bg-gray-50">
                  <div className="flex h-[38px] items-center justify-center rounded-r-md bg-gray-50 p-1.5 text-xl text-gray-500">
                    <IoMdTimer />
                  </div>
                </div>}
          </div>
        </div>
      </div>
    </label>
  );
};
