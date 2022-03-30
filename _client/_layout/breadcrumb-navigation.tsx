import { FC, useState } from "react";

type BreadcrumbNavigationProps = {};

export const BreadcrumbNavigation: FC<BreadcrumbNavigationProps> = ({}) => {
  const [hasBreadcrumbNav, setHasBreadcrumbNav] = useState(false);

  /* TODO: Move this up into some more global state & make dependent on mdx  / actual docs file */
  if (!hasBreadcrumbNav) {
    return <></>;
  }
  return (
    <aside className="fixed top-[66px] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[310px] overflow-y-auto py-10 px-8 xl:block">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        On this page
      </h5>
      <ul className="text-sm leading-6 text-slate-700">
        <li>
          <a
            className="block py-1 font-medium font-medium text-sky-500 dark:text-sky-400"
            href="#class-reference"
          >
            Quick Quick reference
          </a>
        </li>
        <li>
          <a
            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#basic-usage"
          >
            Basic
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#block-and-inline"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Block &amp; Inline
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#flow-root"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Flow Root
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#flex"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Flex
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#inline-flex"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Inline Flex
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#grid"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Grid
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#inline-grid"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Inline Grid
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#contents"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Contents
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#table"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Table
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#hidden"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Hidden
          </a>
        </li>
        <li>
          <a
            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#applying-conditionally"
          >
            Applying Applying conditionally
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#hover-focus-and-other-states"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Hover, focus, and other states
          </a>
        </li>
        <li className="ml-4">
          <a
            className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            href="#breakpoints-and-media-queries"
          >
            <svg
              className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
              height="24"
              viewBox="0 -9 3 24"
              width="3"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            Breakpoints and media queries
          </a>
        </li>
      </ul>
    </aside>
  );
};
