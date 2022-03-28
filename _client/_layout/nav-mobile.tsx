import { Popover, Transition } from "@headlessui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { NavItemProps } from "_client/_layout/nav-desktop";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, MutableRefObject, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type NavMobileProps = {
  nav: Omit<NavItemProps, "active">[];
  settings: Omit<NavItemProps, "active">[];
};

export const NavMobile: FC<NavMobileProps> = ({ nav, settings }) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <nav className="flex h-full items-center gap-1 px-2">
        <ToggleColorThemeButton />

        <Popover className="relative">
          {({ open, close }) => (
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
                    {nav
                      .filter(({ requireAuth }) => session || !requireAuth)
                      .map(({ name, href }, index) => (
                        <NextLink key={name + index} href={href}>
                          <a
                            className="block py-2 px-4 pr-10 text-sm hfa:bg-slate-100"
                            onClick={() => close()}
                          >
                            {name}
                          </a>
                        </NextLink>
                      ))}
                  </div>
                  <div className="pt-1">
                    {session
                      ? settings.map(({ name, href }, index) => (
                          <NextLink key={name + index} href={href}>
                            <a
                              className="block py-2 px-4 pr-10 text-sm hfa:bg-slate-100"
                              onClick={() => close()}
                            >
                              {name}
                            </a>
                          </NextLink>
                        ))
                      : <NextLink href="/auth/sign-in">
                          <a
                            className="flex justify-between py-2 px-4 pr-10 text-sm hfa:bg-slate-100"
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
    </>
  );
};

export default NavMobile;
