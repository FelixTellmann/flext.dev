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
          "fixed top-0 z-40 w-64 h-screen bg-white transition-all",
          navActive ? "left-0 shadow-2xl" : "-left-64 "
        )}
      >
        <>
          <div className="absolute inset-0 bg-white -z-10"></div>
          <button
            className={clsx(
              "group flex absolute top-1/2 z-0 justify-center items-center w-16 h-16 transition-all -translate-x-1/2 -translate-y-1/2 peer",
              navActive ? "left-full" : "left-[calc(100%+40px)]"
            )}
            type="button"
            onClick={() => {
              setNavActive(!navActive);
            }}
          >
            <div
              className={clsx(
                "absolute top-6 w-7 h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all",
                navActive ? "group-hover:top-8 group-hover:opacity-0" : "group-hover:top-8"
              )}
            />
            <div
              className={clsx(
                "absolute top-8 w-7 h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all",
                navActive
                  ? "group-hover:delay-150 group-hover:rotate-45"
                  : "group-hover:ml-3 group-hover:w-4 group-hover:rounded-none group-hover:origin-right group-hover:rotate-45"
              )}
            />
            <div
              className={clsx(
                "absolute top-8 w-7 h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all",
                navActive
                  ? "group-hover:delay-150 group-hover:-rotate-45"
                  : "group-hover:ml-3 group-hover:w-4 group-hover:rounded-none group-hover:origin-right group-hover:-rotate-45"
              )}
            />
            <div
              className={clsx(
                "absolute top-10 w-7 h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all",
                navActive ? "group-hover:top-8 group-hover:opacity-0" : "group-hover:top-8"
              )}
            />
          </button>
          <div
            className={clsx(
              "absolute top-1/2 w-16 h-16 bg-white rounded-full transition-all -translate-x-1/2 -translate-y-1/2 -z-20",
              navActive
                ? "left-full shadow-2xl"
                : "left-[calc(100%+40px)] shadow-lg peer-hover:shadow-2xl drop-shadow-xl peer-hover:drop-shadow-2xl peer-active:drop-shadow-sm"
            )}
          />
        </>
        <ul className="flex relative flex-col gap-2 pt-16">
          <li>
            {/*<Link href="/examples/layout">*/}
            <button
              className="flex gap-6 items-center py-1 px-4 w-full hf:text-gray-600 a:text-black hf:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setDropdown((dropdown) => (dropdown !== "layout" ? "layout" : ""));
              }}
            >
              <BsLayoutSidebarInset className="text-gray-700" />
              <span className="font-semibold">Layout</span>
              <button
                className="p-0.5 ml-auto text-2xl hfa:text-black hf:bg-gray-200 rounded-md transition-colors"
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
                  "flex overflow-hidden relative flex-col gap-4 mt-3 transition-all origin-top",
                  "before:absolute b:top-3 b:left-10 b:w-px b:h-[calc(100%-20px)] b:bg-gray-200",
                  dropdown !== "layout" ? "max-h-0 opacity-0 " : "mb-4 max-h-[100px] opacity-100"
                )}
              >
                <Link href="/examples/page">
                  <a
                    className={clsx(
                      "flex relative pl-16 w-full text-sm font-semibold hfa:text-black text-gray-700",
                      "before:absolute b:top-1/2 b:left-10 b:w-2 b:h-2 b:bg-gray-400 hfa:b:bg-blue-500 b:rounded-full b:transition-colors b:-translate-x-1/2 b:-translate-y-1/2"
                    )}
                  >
                    <span>Page</span>
                  </a>
                </Link>
                <Link href="/examples/layout">
                  <a
                    className={clsx(
                      "flex relative pl-16 w-full text-sm font-semibold hfa:text-black text-gray-700",
                      "before:absolute b:top-1/2 b:left-10 b:w-2 b:h-2 b:bg-gray-400 hfa:b:bg-blue-500 b:rounded-full b:transition-colors b:-translate-x-1/2 b:-translate-y-1/2"
                    )}
                  >
                    <span>Coming Next</span>
                  </a>
                </Link>
                <Link href="/examples/layout">
                  <a
                    className={clsx(
                      "flex relative pl-16 w-full text-sm font-semibold hfa:text-black text-gray-700",
                      "before:absolute b:top-1/2 b:left-10 b:w-2 b:h-2 b:bg-gray-400 hfa:b:bg-blue-500 b:rounded-full b:transition-colors b:-translate-x-1/2 b:-translate-y-1/2"
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
            "overflow-hidden fixed inset-0 z-30 w-screen h-screen bg-gray-500/75 opacity-0 backdrop-blur transition-opacity ",
            navActive ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setNavActive(false)}
        >
          <button
            className="group flex absolute top-0 right-0 justify-center items-center m-8 w-8 h-8"
            type="button"
            onClick={() => setNavActive(false)}
          >
            <div className="absolute w-full h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all rotate-45" />
            <div className="absolute w-full h-0.5 bg-gray-900 group-hfa:bg-black rounded-lg transition-all -rotate-45" />
          </button>
        </div>
      </Portal>
    </>
  );
};
