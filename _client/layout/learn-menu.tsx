import { Portal } from "_client/utils/slate";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsLayoutSidebarInset } from "react-icons/bs";

type LearnMenuProps = {};

export const LearnMenu: FC<LearnMenuProps> = ({}) => {
  const [navActive, setNavActive] = useState(true);
  const [dropdown, setDropdown] = useState("");

  return (
    <>
      <aside
        className={clsx(
          "fixed top-0 z-40 h-screen w-64 bg-white transition-all",
          navActive ? "left-0 shadow-2xl" : "-left-64 "
        )}
      >
        <>
          <div className="absolute inset-0 -z-10 bg-white"></div>
          <button
            className={clsx(
              "group peer absolute top-1/2 z-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all",
              navActive ? "left-full" : "left-[calc(100%+40px)]"
            )}
            type="button"
            onClick={() => {
              setNavActive(!navActive);
            }}
          >
            <div
              className={clsx(
                "absolute top-6 h-0.5 w-7 rounded-lg bg-gray-900 transition-all group-hfa:bg-black",
                navActive ? "group-hover:top-8 group-hover:opacity-0" : "group-hover:top-8"
              )}
            />
            <div
              className={clsx(
                "absolute top-8 h-0.5 w-7 rounded-lg bg-gray-900 transition-all group-hfa:bg-black",
                navActive
                  ? "group-hover:rotate-45 group-hover:delay-150"
                  : "group-hover:ml-3 group-hover:w-4 group-hover:origin-right group-hover:rotate-45 group-hover:rounded-none"
              )}
            />
            <div
              className={clsx(
                "absolute top-8 h-0.5 w-7 rounded-lg bg-gray-900 transition-all group-hfa:bg-black",
                navActive
                  ? "group-hover:-rotate-45 group-hover:delay-150"
                  : "group-hover:ml-3 group-hover:w-4 group-hover:origin-right group-hover:-rotate-45 group-hover:rounded-none"
              )}
            />
            <div
              className={clsx(
                "absolute top-10 h-0.5 w-7 rounded-lg bg-gray-900 transition-all group-hfa:bg-black",
                navActive ? "group-hover:top-8 group-hover:opacity-0" : "group-hover:top-8"
              )}
            />
          </button>
          <div
            className={clsx(
              "absolute top-1/2 -z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all",
              navActive
                ? "left-full shadow-2xl"
                : "left-[calc(100%+40px)] shadow-lg drop-shadow-xl peer-hover:shadow-2xl peer-hover:drop-shadow-2xl peer-active:drop-shadow-sm"
            )}
          />
        </>
        <ul className="relative flex flex-col gap-2 pt-16">
          <li>
            {/*<Link href="/examples/layout">*/}
            <button
              className="flex w-full items-center gap-6 py-1 px-4 transition-colors hf:bg-gray-100 hf:text-gray-600 a:text-black"
              onClick={(e) => {
                e.stopPropagation();
                setDropdown((dropdown) => (dropdown !== "layout" ? "layout" : ""));
              }}
            >
              <BsLayoutSidebarInset className="text-gray-700" />
              <span className="font-semibold">Layout</span>
              <button
                className="ml-auto rounded-md p-0.5 text-2xl transition-colors hfa:text-black hf:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdown((dropdown) => (dropdown !== "layout" ? "layout" : ""));
                }}
              >
                <BiChevronDown
                  className={clsx("transition-all", dropdown === "layout" && "rotate-180")}
                />
              </button>
            </button>
            {/*</Link>*/}
            <>
              <nav
                className={clsx(
                  "relative mt-3 flex origin-top flex-col gap-4 overflow-hidden transition-all",
                  "before:absolute b:top-3 b:left-10 b:h-[calc(100%-20px)] b:w-px b:bg-gray-200",
                  dropdown !== "layout" ? "max-h-0 opacity-0 " : "mb-4 max-h-[100px] opacity-100"
                )}
              >
                <Link href="/examples/page">
                  <a
                    className={clsx(
                      "relative flex w-full pl-16 text-sm font-semibold text-gray-700 hfa:text-black",
                      "before:absolute b:top-1/2 b:left-10 b:h-2 b:w-2 b:-translate-x-1/2 b:-translate-y-1/2 b:rounded-full b:bg-gray-400 b:transition-colors hfa:b:bg-blue-500"
                    )}
                  >
                    <span>Page</span>
                  </a>
                </Link>
                <Link href="/examples/layout">
                  <a
                    className={clsx(
                      "relative flex w-full pl-16 text-sm font-semibold text-gray-700 hfa:text-black",
                      "before:absolute b:top-1/2 b:left-10 b:h-2 b:w-2 b:-translate-x-1/2 b:-translate-y-1/2 b:rounded-full b:bg-gray-400 b:transition-colors hfa:b:bg-blue-500"
                    )}
                  >
                    <span>Coming Next</span>
                  </a>
                </Link>
                <Link href="/examples/layout">
                  <a
                    className={clsx(
                      "relative flex w-full pl-16 text-sm font-semibold text-gray-700 hfa:text-black",
                      "before:absolute b:top-1/2 b:left-10 b:h-2 b:w-2 b:-translate-x-1/2 b:-translate-y-1/2 b:rounded-full b:bg-gray-400 b:transition-colors hfa:b:bg-blue-500"
                    )}
                  >
                    <span>Coming Next</span>
                  </a>
                </Link>
              </nav>
            </>
          </li>
        </ul>
      </aside>
      <Portal>
        <div
          className={clsx(
            "fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-gray-500/75 opacity-0 backdrop-blur transition-opacity ",
            navActive ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setNavActive(false)}
        >
          <button
            className="group absolute top-0 right-0 m-8 flex h-8 w-8 items-center justify-center"
            type="button"
            onClick={() => setNavActive(false)}
          >
            <div className="absolute h-0.5 w-full rotate-45 rounded-lg bg-gray-900 transition-all group-hfa:bg-black" />
            <div className="absolute h-0.5 w-full -rotate-45 rounded-lg bg-gray-900 transition-all group-hfa:bg-black" />
          </button>
        </div>
      </Portal>
    </>
  );
};
