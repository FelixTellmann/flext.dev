import { Popover, Transition } from "@headlessui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { NavItemProps } from "_client/_layout/nav-desktop";
import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { TelemetryLink } from "_client/telemetryLink";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect } from "react";
import { BsGithub, BsThreeDotsVertical } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

type NavMobileProps = {
  github: string;
  nav: Omit<NavItemProps, "active">[];
  settings: Omit<NavItemProps, "active">[];
  githubStars?: number;
};

export const NavMobile: FC<NavMobileProps> = ({ nav, settings, github, githubStars }) => {
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

                    <TelemetryLink
                      className="block py-2 px-4 pr-10 text-sm hfa:bg-slate-100"
                      href={github}
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
                          <span>${githubStars} stars</span>
                        </div>
                      `}
                      onClick={() => close()}
                    >
                      GitHub
                    </TelemetryLink>
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
