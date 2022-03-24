import * as ToolTip from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { FC, FocusEventHandler, MouseEventHandler, useCallback } from "react";
import { IoIosAnalytics } from "react-icons/io";
import { BiAnalyse } from "react-icons/bi";
import { useApi } from "../hooks/useApi";
import { useTelemetryStore } from "../stores/telemetryStore";
import { useThemeStore } from "../stores/themeStore";
import { TelemetryButton } from "../telemetryButton";

type ToggleStatsButtonProps = {
  className?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  tooltip?: {
    side: "top" | "right" | "bottom" | "left";
  };
};

export const ToggleStatsButton: FC<ToggleStatsButtonProps> = ({
  className,
  onBlur,
  onFocus,
  tooltip = { side: "left" },
}) => {
  const [{ showStats }, setThemeStore] = useThemeStore();
  const name = "ToggleTelemetryButton";

  const handleClick = useCallback(() => {
    setThemeStore(({ showStats, ...rest }) => ({
      ...rest,
      showStats: !showStats,
    }));
  }, [setThemeStore]);

  const { api } = useApi();
  const [telemetry, setTelemetry] = useTelemetryStore();

  const updateTelemetry = useCallback((e) => {
    api("telemetry", { name });

    setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
    handleClick();
  }, [api, handleClick, setTelemetry]);

  return (
    <ToolTip.Root delayDuration={1200}>
      <ToolTip.Trigger
        className={clsx(className)}
        onBlur={onBlur}
        onClick={updateTelemetry}
        onFocus={onFocus}
      >
        {showStats
          ? <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
              <IoIosAnalytics className="text-gray-700 transition-colors duration-75 hover:text-gray-800 dark:text-dark-text" />
            </div>
          : <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
              <BiAnalyse className="text-gray-700 transition-colors duration-75 hover:text-gray-800 dark:text-dark-text" />
            </div>}
      </ToolTip.Trigger>
      <ToolTip.Content asChild side={tooltip.side} sideOffset={12}>
        <div className="rounded-sm bg-white p-3 text-sm shadow-2xl drop-shadow-lg dark:bg-dark-card">
          {showStats ? "Hide" : "Show"} stats
          <br />
          {showStats ? <>{telemetry[name] ?? 0} clicks</> : null}
          <div className="fill-current text-white shadow-2xl dark:text-dark-text">
            <ToolTip.Arrow height={8} offset={8} width={12} />
          </div>
        </div>
      </ToolTip.Content>
    </ToolTip.Root>
  );
};
