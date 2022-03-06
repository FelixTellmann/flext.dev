import clsx from "clsx";
import { FC, MouseEventHandler } from "react";

type ProgressDayProps = {
  date: string;
  hide: boolean;
  level: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ProgressDay: FC<ProgressDayProps> = ({ date, level, onClick, hide }) => {
  const disabled = new Date(date).getTime() > Date.now();
  return (
    <>
      {hide
        ? <span className="w-[11px] h-[11px] " />
        : <button
            className={clsx(
              "w-[11px] h-[11px] bg-zinc-200 rounded-[2px] border border-gray-300",
              date === new Date().toISOString().split("T")[0] &&
                "bg-green-200/50 border-dark-success",
              disabled && "opacity-50 cursor-default"
            )}
            data-delay-hide="100"
            data-tip={`<span class="text-xs">${date}</span>`}
            tabIndex={-1}
            onClick={disabled ? () => {} : onClick}
          />}
    </>
  );
};
