import { Popover, Transition } from "@headlessui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Badge } from "_client/badge";
import { CodeComponent } from "_client/code-component";
import LightDarkSwitcher from "_client/light-dark-switch";
import { Link } from "_client/link";

import { getParentNodeByClass } from "_client/utils/get-parent-node-by-class";
import clsx from "clsx";
import { HEADER } from "content/header";
import { SEO } from "content/seo";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import FlextLogo from "public/logo.svg";
import { FC, FocusEventHandler, Fragment, MouseEventHandler, useCallback, useState } from "react";
import { BiGame } from "react-icons/bi";
import { BsGithub, BsThreeDotsVertical } from "react-icons/bs";

const initialNavPosition = { width: 0, left: 0, opacity: 0, transition: "0.1s opacity" };

export const Header: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 h-header border-b border-solid border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-bg">
        <div className="mx-auto flex h-full max-w-7xl px-2 sm:px-4 md:px-8">
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
      <Link href="/">
        <FlextLogo />
      </Link>
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

  const [navHover, setNavHover] = useState(initialNavPosition);

  const handleNavHover: MouseEventHandler = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setNavHover(() => initialNavPosition);
    }
    if (e.target !== e.currentTarget) {
      const navItemRef = getParentNodeByClass(e.target as HTMLElement, "nav-item");
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

  const handleNavFocus: FocusEventHandler<HTMLElement> = useCallback((e) => {
    // @ts-ignore
    if (!e?.currentTarget?.matches(":focus-within")) {
      setNavHover(() => initialNavPosition);
      return;
    }

    const navItemRef = getParentNodeByClass(e.target as HTMLElement, "nav-item");
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
          className="absolute top-1/2 z-0 h-8 -translate-y-1/2 transform rounded bg-slate-200 opacity-60 dark:bg-slate-700"
          style={{
            width: `${navHover.width}px`,
            left: `${navHover.left}px`,
            transition: navHover.transition,
            opacity: navHover.opacity,
          }}
        />
        {HEADER.nav.map((navItem, i) => (
          <div
            key={navItem.href + navItem.name + i}
            className={clsx(
              "nav-item relative flex py-4 text-sm",
              router.asPath.split("#")[0] === navItem.href &&
                "before:absolute b:bottom-0 b:left-3 b:h-[2px] b:w-[calc(100%-24px)] b:bg-slate-900 dark:b:bg-slate-400 "
            )}
          >
            <NextLink href={navItem.href}>
              <a
                key={navItem.href + navItem.name + i}
                className="flex items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
                onFocus={handleNavFocus}
              >
                {navItem.name}
              </a>
            </NextLink>
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
  return (
    <nav className="hidden h-full items-center gap-1 px-2 sm:flex">
      <LightDarkSwitcher />

      <Link
        className="icon-button"
        href={SEO.github}
        referrerPolicy="no-referrer"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </Link>
      <Link className="icon-button" href="/memory">
        <BiGame />
      </Link>
      {/*<Popover className="relative">
        {({ close, open }) => (
          <>
            <Popover.Button className="flex h-8 w-8 items-center justify-center rounded text-xl hfa:text-slate-900 dark:hfa:text-white">
              <span className="sr-only">Open user menu</span>
              <BsThreeDotsVertical />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/20" />

            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white  py-1 shadow-lg dark:divide-gray-700 dark:bg-dark-card ">
                <div className="pb-1">
                  {HEADER.profile.map(({ name, href }, index) => (
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
      </Popover>*/}
    </nav>
  );
}

function NavMobile() {
  const { data: session } = useSession();

  return (
    <nav className="ml-auto flex h-full items-center gap-1 px-2 sm:hidden">
      <LightDarkSwitcher />

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
              <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white py-1 shadow-lg dark:divide-gray-700 dark:border dark:border-slate-700/50 dark:bg-dark-card">
                <div className="pb-1">
                  {HEADER.nav.map(({ name, href }, index) => (
                    <NextLink key={name + index} href={href}>
                      <a
                        className="block py-2 px-4 text-sm hfa:bg-slate-100 dark:hfa:bg-slate-700/50"
                        onClick={() => close()}
                      >
                        {name}
                      </a>
                    </NextLink>
                  ))}

                  <a
                    className="group flex items-center justify-between py-2 px-4 text-sm hfa:bg-slate-100 dark:hfa:bg-slate-700/50"
                    href={SEO.github}
                    referrerPolicy="no-referrer"
                    target="_blank"
                    onClick={() => close()}
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="pt-1">
                  {session
                    ? HEADER.profile.map(({ name, href }, index) => (
                        <NextLink key={name + index} href={href}>
                          <a
                            className="block py-2 px-4 text-sm hfa:bg-slate-100 dark:hfa:bg-slate-700/50"
                            onClick={() => close()}
                          >
                            {name}
                          </a>
                        </NextLink>
                      ))
                    : <NextLink href="/auth/sign-in">
                        <a
                          className="flex items-center justify-between py-2 px-4 text-sm hfa:bg-slate-100 dark:hfa:bg-slate-700/50"
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
