import clsx from "clsx";
import { FC } from "react";
import NextLink from "next/link";

type HeaderProps = {};

const navItem = clsx("mr-5 text-sm font-semibold text-gray-600 hover:text-gray-700");

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="sticky top-0 bg-white border-b border-blueGray-200 border-solid shadow-md blur ">
        <div className="flex items-center mx-auto max-w-[1200px] h-[80px]">
          <div className="mr-6">logo</div>
          <nav className="flex ml-auto">
            <NextLink href="/about"><a className={navItem}>Home</a></NextLink>
            <NextLink href="/about"><a className={navItem}>Blog</a></NextLink>
            <NextLink href="/about"><a className={navItem}>Projects</a></NextLink>
            <NextLink href="/about"><a className={navItem}>Contact</a></NextLink>
          </nav>
          <nav className="flex">
            <button type="button">Dark / Light Mode</button>
            <button type="button">v.0.0.1</button>
          </nav>
        </div>
      </header>
    </>
  );
};
