import { Popover, Transition } from "@headlessui/react";
import LightDarkSwitcher from "_client/light-dark-switch";
import { getParentNodeByClass } from "_client/utils/get-parent-node-by-class";
import clsx from "clsx";
import { HEADER } from "content/header";
import { SEO } from "content/seo";
import { useRouter } from "next/router";
import FlextLogo from "public/logo.svg";
import { FC, Fragment, useCallback, useState } from "react";
import { BsGithub, BsThreeDotsVertical } from "react-icons/bs";

const initialNavPosition = { width: 0, left: 0, opacity: 0, transition: "0.1s opacity" };

export const ExampleHeader: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 h-header border-b border-solid border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-bg">
        <div className="mx-auto flex h-full max-w-7xl px-2 sm:px-4 md:px-8">
          <Logo />
          <NavDesktop />
          <NavDividerDesktop />
          <NavSettingsDesktop />
          <NavMobile />
        </div>
      </header>
    </>
  );
};

export default ExampleHeader;

function Logo() {
  return (
    <div className="flex items-center">
      <a href="#">
        <FlextLogo />
      </a>
    </div>
  );
}

function NavDesktop() {
  const router = useRouter();

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
        {HEADER.nav.map((navItem, i) => (
          <div
            key={navItem.href + navItem.name + i}
            className={clsx(
              "nav-item relative flex py-4 text-sm",
              "fw:before:absolute fw:b:bottom-0 fw:b:left-3 fw:b:h-[2px] fw:b:w-[calc(100%-24px)] fw:b:bg-slate-900 dark:fw:b:bg-slate-400 "
            )}
          >
            <a
              key={navItem.href + navItem.name + i}
              className="flex items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
              href="#"
              onFocus={handleNavFocus}
            >
              {navItem.name}
            </a>
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
      <a
        className="icon-button"
        href={SEO.github}
        referrerPolicy="no-referrer"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
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
                  {HEADER.profile.map(({ name, href }, index) => (
                    <a
                      key={name + index}
                      href="#"
                      className="block py-2 px-4 pr-10 text-sm hfa:bg-slate-100 dark:hfa:bg-gray-700/40"
                      onClick={() => close()}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
}

function NavMobile() {
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
              <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white  py-1 shadow-lg dark:divide-gray-700 dark:bg-dark-card ">
                <div className="pb-1">
                  {HEADER.nav.map(({ name, href }, index) => (
                    <a
                      key={name + index}
                      href="#"
                      className="/**/ block py-2 px-4 text-sm hfa:bg-slate-100"
                      onClick={() => close()}
                    >
                      {name}
                    </a>
                  ))}

                  <a
                    className="group flex items-center justify-between py-2 px-4 text-sm hfa:bg-slate-100"
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
                  {HEADER.profile.map(({ name, href }, index) => (
                    <a
                      key={name + index}
                      href="#"
                      className="block py-2 px-4 text-sm hfa:bg-slate-100"
                      onClick={() => close()}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
}
