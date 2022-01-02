import { TelemetryLink } from "_client/telemetryLink";
import clsx from "clsx";
import { FC, FocusEventHandler } from "react";

export type NavItemProps = {
  active: boolean;
  href: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
};

export const NavItem: FC<NavItemProps> = ({ name, href, active, onFocus, onBlur }) => {
  return (
    <>
      <TelemetryLink
        className={clsx(
          "flex relative py-3 text-sm nav-item",
          active &&
            "before:absolute before:bottom-0 before:left-3 before:w-[calc(100%-24px)] before:h-[2px] before:bg-black before:content-['']"
        )}
        href={href}
        name={`header_nav_${name}`}
        tooltip={{ side: "bottom" }}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <span className="flex overflow-hidden justify-center items-center py-1 px-3 rounded-lg">
          {name}
        </span>
      </TelemetryLink>
    </>
  );
};
