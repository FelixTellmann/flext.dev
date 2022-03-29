import { FC } from "react";
import { FiSearch } from "react-icons/fi";

type SearchProps = {};

export const Search: FC<SearchProps> = ({}) => {
  return (
    <>
      <div className="pointer-events-none sticky top-0 -ml-0.5">
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
    </>
  );
};

export default Search;
