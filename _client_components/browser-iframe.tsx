import { LockClosedIcon } from "@heroicons/react/solid";
import { SEO } from "content/seo";
import { AtRule } from "csstype";
import { motion, useIsomorphicLayoutEffect, useMotionValue, useTransform } from "framer-motion";
import GridIcon from "public/icons/grid.svg";
import FlextLogo from "public/logo-auth.svg";
import { FC, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight, BsGithub } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import Height = AtRule.Height;

const MIN_WIDTH = 400;

export const BrowserIframe: FC<{ height: Height<string>; url: string; showTabs?: boolean }> = ({
  url,
  height = "35rem",
  showTabs = true,
}) => {
  const x = useMotionValue(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframePointerEvents = useMotionValue("auto");

  useIsomorphicLayoutEffect(() => {
    console.log("asdasd");
    if (!constraintsRef?.current || !handleRef?.current) return;

    const observer = new window.ResizeObserver(() => {
      if (!constraintsRef?.current || !handleRef?.current) return;

      const width = constraintsRef.current?.offsetWidth - handleRef?.current?.offsetWidth;

      if (x.get() > width) {
        x.set(width);
      }
    });
    observer.observe(constraintsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!constraintsRef?.current || !handleRef?.current) return;
    handleRef.current.onselectstart = () => false;
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="min-w-full max-w-full shadow-xl sm:min-w-0 sm:rounded-xl"
        style={{ width: useTransform(x, (x) => x + MIN_WIDTH) }}
      >
        <div className="ring-1 ring-slate-900/5 sm:rounded-xl">
          <div className="dark:highlight-white/10 bg-gradient-to-b from-white to-[#FBFBFB] dark:bg-slate-700 dark:bg-none sm:rounded-t-xl">
            <div
              className="grid justify-between gap-1 py-2.5 px-4"
              style={{
                gridTemplateColumns: x.get() > 600 ? "100px 1fr 100px" : "50px 1fr 50px",
              }}
            >
              <div className="flex items-center ">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-yellow-300"></div>
                <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                {x.get() > 600
                  ? <>
                      <BsChevronLeft className="ml-4 flex-none stroke-1 text-slate-400 dark:text-slate-500" />
                      <BsChevronRight className="ml-2 flex-none stroke-1 text-slate-400 dark:text-slate-500" />
                    </>
                  : null}
              </div>

              <div className="mx-auto flex w-4/5 max-w-3xl items-center justify-center rounded-md bg-slate-100 py-1 text-xs font-medium leading-6 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500">
                <LockClosedIcon className="mr-1.5 h-3.5 w-3.5 text-slate-300 dark:text-slate-500" />
                flext.dev
              </div>

              <div className="flex justify-end">
                {x.get() > 600 ? <GridIcon className="text-slate-400 dark:text-slate-500" /> : null}
              </div>
            </div>
            {showTabs
              ? <div className="grid grid-cols-3 overflow-hidden text-xs leading-5">
                  <div className="pointer-events-none -mb-px -ml-px flex select-none items-center justify-center space-x-2 rounded-tr border border-slate-900/5 bg-slate-100 px-4 py-1.5 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                    <BsGithub />
                    <div className="truncate">GitHub: Where the world builds software · GitHub</div>
                  </div>
                  <div className="pointer-events-none flex select-none items-center justify-center space-x-2 px-4 py-1.5 font-medium text-slate-900 dark:text-slate-200">
                    <FlextLogo className="h-5 w-5" />
                    <div className="truncate">{SEO.title}</div>
                  </div>
                  <div className="pointer-events-none -mb-px -mr-4 flex select-none items-center justify-center space-x-2 rounded-tl border border-slate-900/5 bg-slate-100 py-1.5 pl-4 pr-8 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                    <IoLogoVercel />
                    <div className="truncate">
                      Develop. Preview. Ship. For the best frontend teams – Vercel
                    </div>
                  </div>
                </div>
              : null}
          </div>
          <div className="relative -mb-8 rounded-b-xl border-t border-slate-200 bg-white pb-8 dark:border-slate-900/50 dark:bg-slate-800">
            <motion.iframe
              ref={iframeRef}
              src={url}
              title="Mobile-first Demo"
              className="w-full"
              style={{
                pointerEvents: iframePointerEvents,
                height: `calc(${height} - 52px - ${showTabs ? "33px" : "0px"})`,
              }}
            />
          </div>
        </div>
      </motion.div>
      <div
        ref={constraintsRef}
        className="pointer-events-none absolute inset-y-0 "
        style={{
          right: `-${22 / 16}rem`,
          width: `calc(100% - ${MIN_WIDTH}px + ${22 / 16}rem)`,
        }}
      >
        <motion.div
          ref={handleRef}
          drag="x"
          _dragX={x}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          className="pointer-events-auto absolute top-1/2 left-0 z-10 -mt-6 hidden cursor-ew-resize items-center justify-center p-2 sm:flex"
          style={{ x }}
          onDragStart={() => {
            document.documentElement.classList.add("cursor-ew-resize");
            iframePointerEvents.set("none");
          }}
          onDragEnd={() => {
            document.documentElement.classList.remove("cursor-ew-resize");
            iframePointerEvents.set("auto");
          }}
        >
          <div className="h-8 w-1.5 rounded-full bg-slate-500/60"></div>
        </motion.div>
      </div>
    </div>
  );
};
