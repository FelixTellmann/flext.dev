import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { LAYOUT } from "content/layout";
import { useSession } from "next-auth/react";
import { Fragment } from "react";

export const ProfileDropdown = () => {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="group flex items-center justify-center text-sm">
        <span className="sr-only">Open user menu</span>
        <img
          alt=""
          className="flex h-8 w-8 rounded border border-gray-200 bg-gray-800 group-hfa:border-gray-300"
          src={session?.user?.image ?? undefined}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {LAYOUT.header.profile.nav.map(({ name, href }, index) => (
            <Menu.Item key={name + index}>
              {({ active }) => (
                <a
                  className={clsx(
                    active ? "bg-gray-100" : "",
                    "block py-2 px-4 text-sm text-gray-700"
                  )}
                  href={href}
                >
                  {name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
