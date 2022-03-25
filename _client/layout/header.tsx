import { NavItem, NavItemProps } from "_client/layout/navItem";
import { ProfileDropdown } from "_client/layout/profile-dropdown";
import { TelemetryLink } from "_client/telemetryLink";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Logo from "public/logo.svg";
import { FC, useCallback, useState } from "react";
import { ToggleStatsButton } from "_client/layout/toggle-stats-button";
import { ToggleThemeButton } from "_client/layout/toggle-theme-button";

type HeaderProps = {
  logo: {
    alt: string;
    href: string;
    src: string;
  };
  nav: Omit<NavItemProps, "active">[];
};

const getParentNodeByClass = (
  target: HTMLElement,
  className: string,
  i = 0
): HTMLElement | null => {
  if (i > 20) {
    return null;
  }
  if (target?.classList?.contains(className)) {
    return target;
  }
  if (target.parentNode) {
    return getParentNodeByClass(target.parentNode as HTMLElement, className, i++);
  }
  return null;
};

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
      <header className="sticky top-0 z-10 h-header border-b border-solid border-gray-200 bg-white dark:border-gray-700">
        <div className="mx-auto flex h-full w-wrapper max-w-full px-2">
          <div className="hidden h-header items-center sm:flex">
            <TelemetryLink className="flex" href={logo.href} name="headerLogo">
              <Logo className="w-[60px] dark:fill-white" />
              {/*<Image alt={logo.alt} height={66} src={logo.src} width={110} />*/}
            </TelemetryLink>
          </div>
          <nav
            className="scrollbar-none header-nav relative mx-4 mt-auto flex h-full overflow-auto"
            onBlur={handleNavFocus}
            onMouseLeave={() => setNavHover(() => initialNavPosition)}
            onMouseOver={handleNavHover}
          >
            <div
              className="absolute top-1/2 z-0 h-8 -translate-y-1/2 transform rounded bg-gray-200 opacity-60 dark:bg-gray-700"
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
                active={router.asPath.split("#")[0] === navItem.href}
                href={navItem.href}
                name={navItem.name}
                onFocus={handleNavFocus}
              />
            ))}
          </nav>
          <nav className="ml-auto flex items-center">
            {!session && !/^\/auth\/sign-in/i.test(router.pathname)
              ? <>
                  <TelemetryLink className="mr-2" href="/auth/sign-in" name="SignInButton">
                    <div className="flex h-8 items-center justify-center px-2 text-sm text-gray-700 hfa:text-black">
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
