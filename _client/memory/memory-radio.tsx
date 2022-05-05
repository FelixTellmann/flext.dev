import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

export const MemoryRadio = ({
  value,
  disabled,
}: {
  value: string | number;
  disabled?: boolean;
}) => (
  <RadioGroup.Option value={value} disabled={disabled} className="flex flex-1">
    {({ checked }) => (
      <div
        className={clsx(
          "flex flex-1 cursor-pointer items-center justify-center rounded-full bg-slate-400/75 py-1.5 text-slate-50 dark:bg-slate-700",
          checked && "!bg-slate-600 dark:!bg-slate-500",
          disabled && "cursor-not-allowed !bg-slate-400/50"
        )}
      >
        {value}
      </div>
    )}
  </RadioGroup.Option>
);
