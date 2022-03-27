import { TelemetryLink } from "_client/telemetryLink";
import clsx from "clsx";
import { FC, FocusEventHandler } from "react";

export type NavItemProps = {
  active: boolean;
  href: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  requireAuth?: boolean;
};

export const NavItem: FC<NavItemProps> = ({ name, href, active, onFocus, onBlur }) => {
  return (
    <>
      <TelemetryLink
        className={clsx(
          "nav-item relative flex py-3 text-sm",
          active &&
            "before:absolute before:bottom-0 before:left-3 before:h-[2px] before:w-[calc(100%-24px)] before:bg-black"
        )}
        href={href}
        name={`header_nav_${name}`}
        tooltip={{ side: "bottom" }}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <span className="flex items-center justify-center overflow-hidden rounded-lg py-1 px-3">
          {name}
        </span>
      </TelemetryLink>
    </>
  );
};
