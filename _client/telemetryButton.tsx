import * as ToolTip from "@radix-ui/react-tooltip";
import { PrimitiveButtonProps } from "@radix-ui/react-tooltip";
import { useApi } from "_client/hooks/useApi";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { FC, FocusEventHandler, MouseEventHandler, RefAttributes, useCallback } from "react";
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
  const { api } = useApi();
  const [telemetry, setTelemetry] = useTelemetryStore();
  const [{ showStats }, setThemeStore] = useThemeStore();

  const updateTelemetry = useCallback(
    (e) => {
      api("telemetry", { name });

      setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
      if (onClick && typeof onClick === "function") {
        onClick(e);
      }
    },
    [api, name, onClick, setTelemetry]
  );

  return (
    <ToolTip.Root delayDuration={1200}>
      <ToolTip.Trigger
        className={clsx(className)}
        onBlur={onBlur}
        onClick={updateTelemetry}
        onFocus={onFocus}
      >
        {children}
      </ToolTip.Trigger>
      <ToolTip.Content asChild side={tooltip.side} sideOffset={12}>
        {showStats ? (
          <div className="p-3 text-sm bg-white rounded-sm shadow-2xl drop-shadow-lg">
            {telemetry[name] ?? 0} clicks
            <div className="text-white shadow-2xl fill-current">
              <ToolTip.Arrow height={8} offset={8} width={12} />
            </div>
          </div>
        ) : null}
      </ToolTip.Content>
    </ToolTip.Root>
  );
};
