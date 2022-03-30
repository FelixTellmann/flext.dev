import { DOCS } from "content/docs";
import NextLink from "next/link";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

export const UiNavigation: FC = ({}) => {
  return (
    <>
      <header className="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
        Mobile Nav
      </header>
      <aside className="fixed bottom-0 top-[66px] left-[max(0px,calc(50%-45rem))] z-20 hidden w-[310px] overflow-y-auto px-8 pb-10 lg:block">
        <Search />
        <nav className="flex flex-col gap-8 text-sm leading-6">
          {DOCS.nav.map(({ title, links }, i) => (
            <div key={title + i}>
              <h5 className="mb-8 mb-3 font-semibold text-slate-900 dark:text-slate-200">
                {title}
              </h5>
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
      </aside>
      <div className="fixed top-[66px] left-[max(302px,calc(50%-45rem+302px))] z-50 hidden h-36 w-2 bg-gradient-to-b from-white  via-white dark:from-slate-900  lg:block" />
    </>
  );
};

function Search() {
  return (
    <div className="pointer-events-none sticky top-0 z-10 -ml-0.5">
      <div className="h-10 bg-white dark:bg-slate-900"></div>
      <div className="pointer-events-auto relative bg-white dark:bg-slate-900">
        <button
          className="dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex"
          type="button"
        >
          <FiSearch className="mr-3 stroke-[2px] text-xl" />
          Quick search...
          <span className="ml-auto flex-none pl-3 text-xs font-semibold">Ctrl K</span>
        </button>
      </div>
      <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
    </div>
  );
}
