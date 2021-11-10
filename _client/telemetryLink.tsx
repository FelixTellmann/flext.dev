import { useApi } from "_client/hooks/useApi";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import { FC, useCallback } from "react";
import NextLink, { LinkProps } from "next/link";
import * as ToolTip from "@radix-ui/react-tooltip";

type TelemetryLinkProps = LinkProps & {
  name: string;
  className?: string;
  tooltip?: {
    side: "top" | "right" | "bottom" | "left";
  };
};

export const TelemetryLink: FC<TelemetryLinkProps> = ({
  name,
  children,
  className,
  tooltip = { side: "left" },
  ...linkProps
}) => {
  const { api } = useApi();
  const [telemetry, setTelemetry] = useTelemetryStore();

  const updateTelemetry = useCallback(() => {
    api("telemetry", { name });

    setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
  }, [api, name, setTelemetry]);

  return (
    <>
      <NextLink {...linkProps}>
        <a className={clsx(className)} tabIndex={-1} onClick={updateTelemetry}>
          <ToolTip.Root delayDuration={1200}>
            <ToolTip.Trigger className="focus:rounded-sm focus-border">{children}</ToolTip.Trigger>
            <ToolTip.Content asChild side={tooltip.side} sideOffset={12}>
              <div className="p-3 text-sm bg-white rounded-sm shadow-2xl drop-shadow-lg">
                {telemetry[name] ?? 0} clicks
                <div className="text-white shadow-2xl fill-current">
                  <ToolTip.Arrow height={8} offset={8} width={12} />
                </div>
              </div>
            </ToolTip.Content>
          </ToolTip.Root>
        </a>
      </NextLink>
    </>
  );
};
