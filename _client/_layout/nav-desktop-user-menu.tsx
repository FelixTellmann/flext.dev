import { Menu, Popover, Transition } from "@headlessui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { NavItemProps } from "_client/_layout/nav-desktop";
import { TelemetryLink } from "_client/telemetryLink";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type UserProfileProps = {
  nav: Omit<NavItemProps, "active">[];
};

export const NavDesktopUserMenu: FC<UserProfileProps> = ({ nav }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session && !/^\/auth\/sign-in/i.test(router.pathname)) {
    return (
      <TelemetryLink className="mr-2" href="/auth/sign-in" name="SignInButton">
        <div className="flex h-8 items-center justify-center px-2 text-sm text-sm font-medium h:text-sky-500 dark:h:text-sky-400">
          Login <ArrowNarrowRightIcon className="ml-2 w-3 pt-px" />
        </div>
      </TelemetryLink>
    );
  }

  if (!session) {
    return <></>;
  }

  return (
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
  );
};
