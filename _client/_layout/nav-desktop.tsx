import { getParentNodeByClass } from "_client/_utils/get-parent-node-by-class";
import { TelemetryLink } from "_client/telemetryLink";

import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, FocusEventHandler, useCallback, useState } from "react";

export type NavItemProps = {
  active: boolean;
  href: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  requireAuth?: boolean;
};

type NavDesktopProps = {
  nav: Omit<NavItemProps, "active">[];
};
const initialNavPosition = { width: 0, left: 0, opacity: 0, transition: "0.1s opacity" };

export const NavDesktop: FC<NavDesktopProps> = ({ nav }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [navHover, setNavHover] = useState(initialNavPosition);

  const handleNavHover = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setNavHover(() => initialNavPosition);
    }
    if (e.target !== e.currentTarget) {
      const navItemRef = getParentNodeByClass(e.target, "nav-item");
      if (navItemRef) {
        setNavHover(({ opacity }) => ({
          width: navItemRef.offsetWidth,
          left: navItemRef.offsetLeft,
          opacity: 0.7,
          transition: opacity ? "0.18s" : "0.1s opacity",
        }));
      }
    }
  }, []);

  const handleNavFocus = useCallback((e) => {
    if (!e.currentTarget.matches(":focus-within")) {
      setNavHover(() => initialNavPosition);
      return;
    }
    const navItemRef = getParentNodeByClass(e.target, "nav-item");
    if (navItemRef) {
      setNavHover((currentNavHover) => {
        const { opacity, left, width } = currentNavHover;
        if (left === navItemRef.offsetLeft && width === navItemRef.offsetWidth) {
          return currentNavHover;
        }
        return {
          width: navItemRef.offsetWidth,
          left: navItemRef.offsetLeft,
          opacity: 0.7,
          transition: opacity ? "0.18s" : "0.1s opacity",
        };
      });
    }
  }, []);

  const handleNavReset = useCallback((e) => {
    setNavHover(() => initialNavPosition);
  }, []);

  return (
    <>
      <nav
        className="scrollbar-none header-nav relative mt-auto flex h-full overflow-auto px-2"
        onBlur={handleNavFocus}
        onMouseLeave={handleNavReset}
        onMouseOver={handleNavHover}
      >
        <div
          className="absolute top-1/2 z-0 h-8 -translate-y-1/2 transform rounded bg-slate-200 opacity-60 dark:bg-gray-700"
          style={{
            width: `${navHover.width}px`,
            left: `${navHover.left}px`,
            transition: navHover.transition,
            opacity: navHover.opacity,
          }}
        />
        {nav
          .filter(({ requireAuth }) => session || !requireAuth)
          .map((navItem, i) => (
            <div
              key={navItem.href + navItem.name + i}
              className={clsx(
                "nav-item relative flex py-4 text-sm",
                router.asPath.split("#")[0] === navItem.href &&
                  "before:absolute b:bottom-0 b:left-3 b:h-[2px] b:w-[calc(100%-24px)] b:bg-slate-900 dark:b:bg-slate-400 "
              )}
            >
              <TelemetryLink
                key={navItem.href + navItem.name + i}
                className="flex items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
                href={navItem.href}
                name={`header_nav_${navItem.name}`}
                onFocus={handleNavFocus}
              >
                {navItem.name}
              </TelemetryLink>
            </div>
          ))}
      </nav>
    </>
  );
};

export default NavDesktop;
