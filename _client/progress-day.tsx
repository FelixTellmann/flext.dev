import clsx from "clsx";
import { FC, MouseEventHandler } from "react";

type ProgressDayProps = {
  date: string;
  hide: boolean;
  level: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  selected: boolean;
};

export const ProgressDay: FC<ProgressDayProps> = ({ date, level, onClick, hide, selected }) => {
  const disabled = new Date(date).getTime() > Date.now();
  return (
    <>
      {hide
        ? <span className="h-[11px] w-[11px] " />
        : <button
            className={clsx(
              "h-[11px] w-[11px] rounded-[2px] border ",
              date === new Date().toISOString().split("T")[0] &&
                "!border-dark-success !bg-green-200/50",
              selected &&
                date !== new Date().toISOString().split("T")[0] &&
                "!border-cyan-400 !bg-cyan-200/50",
              disabled && "cursor-default opacity-50",
              [
                "border-gray-300 bg-zinc-200",
                "border-[#9be9a8] bg-[#9be9a8]",
                "border-[#40c463] bg-[#40c463]",
                "border-[#30a14e] bg-[#30a14e]",
                "border-[#216e39] bg-[#216e39]",
                "border-[#216e39] bg-[#216e39]",
              ][level]
            )}
            data-delay-hide="100"
            data-tip={`<span class="text-xs">${date}</span>`}
            tabIndex={-1}
            onClick={disabled ? () => {} : onClick}
          />}
    </>
  );
};
