import * as ToolTip from "@radix-ui/react-tooltip";
import { useMutation } from "_client/hooks/_useTRPC";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, FocusEventHandler, HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, HTMLAttributes, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import { useThemeStore } from "./stores/themeStore";

type TelemetryLinkProps = LinkProps & {
  name: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLAnchorElement>;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  target?: HTMLAttributeAnchorTarget;
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
  target,
  referrerPolicy,
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
        <a
          className={clsx(className)}
          data-for="global"
          data-tip={`${telemetry[name] ?? 0} clicks`}
          data-tip-disable={!showStats}
          referrerPolicy={referrerPolicy}
          target={target}
          onBlur={onBlur}
          onClick={updateTelemetry}
          onFocus={onFocus}
        >
          {children}
        </a>
      </NextLink>
    </>
  );
};
