import Search from "_client/_components/search";
import NextLink from "next/link";
import { FC } from "react";

type NavLink = {
  href: string;
  title: string;
};

type PrimaryNavProps = {
  nav: {
    links: NavLink[];
    title: string;
  }[];
};

export const PrimaryNav: FC<PrimaryNavProps> = ({ nav }) => {
  return (
    <>
      <Search />
      <nav className="flex flex-col gap-8 text-sm leading-6">
        {nav.map(({ title, links }, i) => (
          <div key={title + i}>
            <h5 className="mb-8 mb-3 font-semibold text-slate-900 dark:text-slate-200">{title}</h5>
            <nav className="text-slate-700 dark:border-slate-800 dark:text-slate-400">
              {links.map((link, j) => (
                <NextLink key={link.title + j} href={link.href}>
                  <a className="block rounded-r border-l-2 border-slate-100 py-1 pl-4 h:border-sky-300 h:bg-sky-50 h:text-black dark:h:border-slate-500 dark:h:text-slate-300">
                    {link.title}
                  </a>
                </NextLink>
              ))}
            </nav>
          </div>
        ))}
      </nav>
    </>
  );
};

export default PrimaryNav;
