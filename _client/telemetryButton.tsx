import * as ToolTip from "@radix-ui/react-tooltip";
import { useMutation } from "_client/hooks/_useTRPC";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import { FC, FocusEventHandler, MouseEventHandler, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import { useThemeStore } from "./stores/themeStore";

type TelemetryButtonProps = {
  name: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  tooltip?: {
    side: "top" | "right" | "bottom" | "left";
  };
};

export const TelemetryButton: FC<TelemetryButtonProps> = ({
  name,
  children,
  className,
  onClick,
  onFocus,
  onBlur,
  tooltip = { side: "left" },
}) => {
  const { mutate } = useMutation(["telemetry.create"]);
  const [telemetry, setTelemetry] = useTelemetryStore();
  const [{ showStats }, setThemeStore] = useThemeStore();

  const updateTelemetry = useCallback((e) => {
    mutate({ name });

    setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
    if (onClick && typeof onClick === "function") {
      onClick(e);
    }
  }, [mutate, name, onClick, setTelemetry]);

  return (
    <>
      <button
        className={clsx(className)}
        data-for="global"
        data-tip={`${telemetry[name] ?? 0} clicks`}
        data-tip-disable={!showStats}
        onBlur={onBlur}
        onClick={updateTelemetry}
        onFocus={onFocus}
      >
        {children}
      </button>
    </>
  );
};
