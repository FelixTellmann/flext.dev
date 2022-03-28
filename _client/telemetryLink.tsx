import * as ToolTip from "@radix-ui/react-tooltip";
import { useMutation } from "_client/hooks/_useTRPC";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, FocusEventHandler, useCallback } from "react";
import { useThemeStore } from "./stores/themeStore";

type TelemetryLinkProps = LinkProps & {
  name: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  tooltip?: {
    side: "top" | "right" | "bottom" | "left";
  };
};

export const TelemetryLink: FC<TelemetryLinkProps> = ({
  name,
  children,
  className,
  onFocus,
  onBlur,
  tooltip = { side: "left" },
  ...linkProps
}) => {
  const { mutate } = useMutation(["telemetry.create"]);

  const [telemetry, setTelemetry] = useTelemetryStore();
  const [{ showStats }, setThemeStore] = useThemeStore();

  const updateTelemetry = useCallback((e) => {
    mutate({ name });

    setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
  }, [mutate, name, setTelemetry]);

  return (
    <>
      <NextLink {...linkProps}>
        <a className={clsx(className)} tabIndex={-1} onClick={updateTelemetry}>
          <ToolTip.Root delayDuration={1200}>
            <ToolTip.Trigger onBlur={onBlur} onFocus={onFocus}>
              {children}
            </ToolTip.Trigger>
            <ToolTip.Content asChild side={tooltip.side} sideOffset={12}>
              {showStats
                ? <div className="rounded-sm bg-white p-3 text-sm shadow-2xl drop-shadow-lg dark:bg-dark-card">
                    {telemetry[name] ?? 0} clicks
                    <div className="fill-current text-white shadow-2xl dark:text-dark-text">
                      <ToolTip.Arrow height={8} offset={8} width={12} />
                    </div>
                  </div>
                : null}
            </ToolTip.Content>
          </ToolTip.Root>
        </a>
      </NextLink>
    </>
  );
};
