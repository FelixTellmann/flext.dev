import { NavItem, NavItemProps } from "_client/layout/navItem";
import { ProfileDropdown } from "_client/layout/profileDropdown";
import { TelemetryButton } from "_client/telemetryButton";
import { TelemetryLink } from "_client/telemetryLink";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Logo from "public/logo.svg";

import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ToggleThemeButton } from "./toggleThemeButton";
import { ToggleStatsButton } from "./toggleStatsButton";

type HeaderProps = {
  logo: {
    alt: string;
    href: string;
    src: string;
  };
  nav: Omit<NavItemProps, "active">[];
};

function getParentNodeByClass(target: HTMLElement, className: string, i = 0) {
  if (i > 20) {
    return false;
  }
  if (target?.classList?.contains(className)) {
    return target;
  }
  if (target.parentNode) {
    return getParentNodeByClass(target.parentNode as HTMLElement, className, i++);
  }
  return false;
}

const initialNavPosition = { width: 0, left: 0, opacity: 0, transition: "0.1s opacity" };

export const Header: FC<HeaderProps> = ({ nav, logo }) => {
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

  return (
    <>
      <header className="sticky top-0 z-10 h-header bg-white border-b border-gray-200 dark:border-gray-700 border-solid">
        <div className="flex px-2 mx-auto w-wrapper max-w-full h-full">
          <div className="hidden items-center h-header sm:flex">
            <TelemetryLink href={logo.href} name="headerLogo">
              <Logo className="h-[50px] dark:fill-white" />
              {/*<Image alt={logo.alt} height={66} src={logo.src} width={110} />*/}
            </TelemetryLink>
          </div>
          <nav
            className="flex overflow-auto relative mx-4 mt-auto h-full scrollbar-none header-nav"
            onBlur={handleNavFocus}
            onMouseLeave={() => setNavHover(() => initialNavPosition)}
            onMouseOver={handleNavHover}
          >
            <div
              className="absolute top-1/2 z-0 h-8 bg-gray-200 dark:bg-gray-700 rounded opacity-60 transform -translate-y-1/2"
              style={{
                width: `${navHover.width}px`,
                left: `${navHover.left}px`,
                transition: navHover.transition,
                opacity: navHover.opacity,
              }}
            />
            {nav.map((navItem, i) => (
              <NavItem
                key={navItem.href + navItem.name + i}
                active={router.asPath === navItem.href}
                href={navItem.href}
                name={navItem.name}
                onFocus={handleNavFocus}
              />
            ))}
          </nav>
          <nav className="flex items-center ml-auto">
            {!session && !/^\/auth\/sign-in/i.test(router.pathname)
              ? <>
                  <TelemetryLink className="mr-2" href="/auth/sign-in" name="SignInButton">
                    <div className="flex justify-center items-center px-2 h-8 text-sm hfa:text-black text-gray-700">
                      Login
                    </div>
                  </TelemetryLink>
                </>
              : null}
            {/*{!session && !/^\/auth\/sign-up/i.test(router.pathname)
              ? <>
                  <TelemetryLink className="mr-2" href="/auth/sign-up" name="SignUpButton">
                    <div className="flex justify-center items-center px-2 h-8 text-sm bg-gray-200 hover:bg-gray-300 rounded">
                      Sign Up
                    </div>
                  </TelemetryLink>
                </>
              : null}*/}
            <ToggleThemeButton className="mr-2" />
            <ToggleStatsButton className="mr-2" />
            {/* Profile dropdown */}
            {session ? <ProfileDropdown /> : null}
          </nav>
        </div>
      </header>
    </>
  );
};
