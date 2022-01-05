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

  const updateTelemetry = useCallback(
    (e) => {
      api("telemetry", { name });

      setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
      handleClick();
    },
    [api, handleClick, setTelemetry]
  );

  return (
    <ToolTip.Root delayDuration={1200}>
      <ToolTip.Trigger
        className={clsx(className)}
        onBlur={onBlur}
        onClick={updateTelemetry}
        onFocus={onFocus}
      >
        {showStats
          ? <div className="flex justify-center items-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded">
              <IoIosAnalytics className="text-gray-700 hover:text-gray-800 transition-colors duration-75" />
            </div>
          : <div className="flex justify-center items-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded">
              <BiAnalyse className="text-gray-700 hover:text-gray-800 transition-colors duration-75" />
            </div>}
      </ToolTip.Trigger>
      <ToolTip.Content asChild side={tooltip.side} sideOffset={12}>
        <div className="p-3 text-sm bg-white rounded-sm shadow-2xl drop-shadow-lg">
          {showStats ? "Hide" : "Show"} stats
          <br />
          {showStats ? <>{telemetry[name] ?? 0} clicks</> : null}
          <div className="text-white shadow-2xl fill-current">
            <ToolTip.Arrow height={8} offset={8} width={12} />
          </div>
        </div>
      </ToolTip.Content>
    </ToolTip.Root>
  );
};
