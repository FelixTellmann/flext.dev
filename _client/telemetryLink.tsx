import * as ToolTip from "@radix-ui/react-tooltip";
import { useMutation } from "_client/hooks/_useTRPC";
import { useTelemetryStore } from "_client/stores/telemetryStore";
import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, FocusEventHandler, HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, HTMLAttributes, ReactNode, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import { useThemeStore } from "./stores/themeStore";

type TelemetryLinkProps = LinkProps & {
  name: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLAnchorElement>;
  onClick?: () => void;
  onFocus?: FocusEventHandler<HTMLAnchorElement>;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  target?: HTMLAttributeAnchorTarget;
  tooltip?: string;
};

export const TelemetryLink: FC<TelemetryLinkProps> = ({
  name,
  children,
  className,
  onFocus,
  onBlur,
  target,
  tooltip,
  referrerPolicy,
  onClick,
  ...linkProps
}) => {
  const { mutate } = useMutation(["telemetry.create"]);

  const [telemetry, setTelemetry] = useTelemetryStore();
  const [{ showStats }, setThemeStore] = useThemeStore();

  const updateTelemetry = useCallback((e) => {
    mutate({ name });

    setTelemetry((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
    if (onClick) {
      onClick();
    }
  }, [mutate, name, onClick, setTelemetry]);

  return (
    <>
      <NextLink {...linkProps}>
        <a
          className={clsx(className)}
          data-for="global"
          data-tip={tooltip ? tooltip : `${telemetry[name] ?? 0} clicks`}
          data-tip-disable={!showStats && !tooltip}
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
