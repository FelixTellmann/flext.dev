import { Popover, Transition } from "@headlessui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Badge } from "_client/_components/badge";
import { getParentNodeByClass } from "_client/_utils/get-parent-node-by-class";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { useThemeStore } from "_client/stores/themeStore";
import { TelemetryLink } from "_client/telemetryLink";
import clsx from "clsx";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import FlextLogo from "public/logo.svg";
import { FC, Fragment, useCallback, useState } from "react";
import { BsFillStarFill, BsGithub, BsThreeDotsVertical } from "react-icons/bs";

const initialNavPosition = { width: 0, left: 0, opacity: 0, transition: "0.1s opacity" };

export const Header: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 h-header border-b border-solid border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-bg">
        <div className="mx-auto flex h-full max-w-[1440px] px-2 sm:px-4 md:px-8">
          <Logo />
          <VersionBadge />
          <NavDesktop />
          <NavDividerDesktop />
          <NavSettingsDesktop />
          <NavMobile />
        </div>
      </header>
    </>
  );
};

function Logo() {
  return (
    <div className="flex items-center">
      <TelemetryLink href="/" name="headerLogo">
        <FlextLogo />
      </TelemetryLink>
    </div>
  );
}

function VersionBadge() {
  return (
    <div className="ml-4 flex items-center">
      <Badge>v{process.env.NEXT_PUBLIC_APP_VERSION}</Badge>
    </div>
  );
}

function NavDesktop() {
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

  const handleNavReset = useCallback(() => {
    setNavHover(() => initialNavPosition);
  }, []);

  return (
    <>
      <nav
        className="scrollbar-none header-nav relative mt-auto ml-auto hidden h-full overflow-auto px-2 sm:flex"
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
        {LAYOUT.header.nav
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
}

function NavDividerDesktop() {
  return <div className="my-auto hidden h-6 w-px bg-slate-200 dark:bg-gray-700 sm:block" />;
}

function NavSettingsDesktop() {
  const [{ github }] = useThemeStore();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav className="hidden h-full items-center gap-1 px-2 sm:flex">
      <ToggleColorThemeButton />
      <TelemetryLink
        className="icon-button"
        href={SEO.github}
        name="GitHubLink"
        referrerPolicy="no-referrer"
        target="_blank"
        tooltip={` 
        <div style="text:white; display:flex; gap: 0.5rem; align-items: center">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="14"
               viewBox="0 0 14 14"
               fill="none">
            <g clip-path="url(#clip0)">
              <path d="M7.33093 0.544736L9.11174 4.75961L13.6708 5.15127C13.9871 5.17858 14.1157 5.57312 13.8757 5.78081L10.4175 8.77686L11.4538 13.2339C11.5257 13.5437 11.1901 13.7873 10.9184 13.6227L7.00035 11.2598L3.08227 13.6227C2.80991 13.7866 2.47502 13.5429 2.54688 13.2339L3.58317 8.77686L0.124315 5.78009C-0.115714 5.5724 0.0122059 5.17786 0.32913 5.15056L4.88824 4.75889L6.66905 0.544736C6.79266 0.251527 7.20732 0.251527 7.33093 0.544736Z"
                    fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs> 
          </svg>
          <span>${github?.stargazers_count} stars</span>
        </div>
      `}
      >
        <BsGithub />
      </TelemetryLink>
      {session
        ? <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button className="flex h-8 w-8 items-center justify-center rounded text-xl hfa:text-slate-900 dark:hfa:text-white">
                  <span className="sr-only">Open user menu</span>
                  <BsThreeDotsVertical />
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/20" />

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white  py-1 shadow-lg dark:divide-gray-700 dark:bg-dark-card ">
                    <div className="pb-1">
                      {LAYOUT.header.profile.nav.map(({ name, href }, index) => (
                        <NextLink key={name + index} href={href}>
                          <a
                            className="block py-2 px-4 pr-10 text-sm hfa:bg-slate-100 dark:hfa:bg-gray-700/40"
                            onClick={() => close()}
                          >
                            {name}
                          </a>
                        </NextLink>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        : !/^\/auth\/sign-in/i.test(router.pathname)
        ? <TelemetryLink className="mr-2" href="/auth/sign-in" name="SignInButton">
            <div className="flex h-8 items-center justify-center px-2 text-sm text-sm font-medium h:text-sky-500 dark:h:text-sky-400">
              Login <ArrowNarrowRightIcon className="ml-2 w-3 pt-px" />
            </div>
          </TelemetryLink>
        : null}
    </nav>
  );
}

function NavMobile() {
  const { data: session } = useSession();
  const [{ github }] = useThemeStore();

  return (
    <nav className="ml-auto flex h-full items-center gap-1 px-2 sm:hidden">
      <ToggleColorThemeButton />

      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button className="flex h-8 w-8 items-center justify-center rounded text-xl hfa:text-slate-900 dark:hfa:text-white">
              <span className="sr-only">Open user menu</span>
              <BsThreeDotsVertical />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/20" />

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white  py-1 shadow-lg dark:divide-gray-700 dark:bg-dark-card ">
                <div className="pb-1">
                  {LAYOUT.header.nav
                    .filter(({ requireAuth }) => session || !requireAuth)
                    .map(({ name, href }, index) => (
                      <NextLink key={name + index} href={href}>
                        <a
                          className="/**/ block py-2 px-4 text-sm hfa:bg-slate-100"
                          onClick={() => close()}
                        >
                          {name}
                        </a>
                      </NextLink>
                    ))}

                  <TelemetryLink
                    className="group flex items-center justify-between py-2 px-4 text-sm hfa:bg-slate-100"
                    href={SEO.github}
                    name="GitHubLink"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    onClick={() => close()}
                  >
                    GitHub{" "}
                    <div className="flex items-center gap-2 text-gray-400 group-hfa:text-gray-700 ">
                      <BsFillStarFill /> {github?.stargazers_count} Stars
                    </div>
                  </TelemetryLink>
                </div>

                <div className="pt-1">
                  {session
                    ? LAYOUT.header.profile.nav.map(({ name, href }, index) => (
                        <NextLink key={name + index} href={href}>
                          <a
                            className="/**/ block py-2 px-4 text-sm hfa:bg-slate-100"
                            onClick={() => close()}
                          >
                            {name}
                          </a>
                        </NextLink>
                      )) /**/
                    : <NextLink href="/auth/sign-in">
                        <a
                          className="/**/ flex items-center justify-between py-2 px-4 text-sm hfa:bg-slate-100"
                          onClick={() => close()}
                        >
                          Login <ArrowNarrowRightIcon className="ml-2 w-3 pt-px" />
                        </a>
                      </NextLink>}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
}
