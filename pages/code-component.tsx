import { Code } from "_client/code";
import { CodeGroup } from "_client/code-group";
import { ContentBlock, ContentBlockProps } from "_client/content-block";
import useCopyToClipboard from "_client/hooks/use-copy-to-clipboard";
import scrollTo from "_client/utils/scroll-to";
import clsx from "clsx";
import fs from "fs";
import { GetStaticProps } from "next";
import { FC, Ref, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { HiArrowSmLeft, HiArrowSmRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

type CodeComponentProps = {
  codeBlocks: {
    caption: string;
    code: string;
    description: string;
  }[];
  contentBlock: ContentBlockProps;
  filename: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      contentBlock: {
        caption: "Developer experience to love",
        title: "Develop with an open, thought‑out API",
        description: `One of our main goals is to provide the best possible developer experience. Radix Primitives provides a fully-typed API. All components share a similar API, creating a consistent and predictable experience.`,
      },
      filename: "MySuperCoolFile.tsx",
      codeBlocks: [
        {
          caption: "Unstyled",
          description: "No need to override styles, no specificity wars.",
          code: fs.readFileSync("./content/examples/test-1.txt", { encoding: "utf-8" }),
        },
        {
          caption: "Composable",
          description: "Granular access to each component part.",
          code: fs.readFileSync("./content/examples/test-2.txt", { encoding: "utf-8" }),
        },
        {
          caption: "Customizable",
          description: "Configure behavior, control focus, add event listeners.",
          code: fs.readFileSync("./content/examples/test-3.txt", { encoding: "utf-8" }),
        },
        {
          caption: "Consistent",
          description: "Components with similar functionality share similar API.",
          code: fs.readFileSync("./content/examples/test-4.txt", { encoding: "utf-8" }),
        },
      ],
    }, // will be passed to the page component as props
  };
};

export const CodeComponent: FC<CodeComponentProps> = ({
  contentBlock,
  codeBlocks = [],
  filename,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-gradient1 py-20" ref={sectionRef}>
      <div className="mx-auto flex max-w-7xl flex-col px-4 lg:flex-row lg:gap-8 lg:px-7">
        <div className="flex max-w-[440px] flex-col">
          <ContentBlock {...contentBlock} />
          <DesktopCodeSelector codeBlocks={codeBlocks} sectionRef={sectionRef} />
        </div>
        <section className="flex-1">
          <MobileCodeSlider codeBlocks={codeBlocks} />
          <DesktopCodeBrowser codeBlocks={codeBlocks} filename={filename} />
        </section>
      </div>
    </div>
  );
};

export default CodeComponent;

export const MobileCodeSlider: FC<Omit<CodeComponentProps, "contentBlock" | "filename">> = ({
  codeBlocks,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [copyToClipboard] = useCopyToClipboard();

  const handleScroll = useCallback(() => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef?.current as HTMLDivElement;
    setShowPrev(scrollLeft > 0);
    setShowNext(scrollLeft + clientWidth < scrollWidth);
  }, []);

  const scrollPrev = useCallback((e) => {
    const scrollContainer = containerRef?.current as HTMLDivElement;
    let found = false;
    let scrollTo = 0;
    scrollContainer.querySelectorAll("figure").forEach((figure) => {
      if (found) return;
      scrollTo = scrollTo + figure.offsetWidth + 16;
      if (scrollContainer.scrollLeft <= scrollTo) {
        scrollTo = scrollTo - figure.offsetWidth - 16;
        found = true;
      }
    });
    scrollContainer.scrollTo(scrollTo, 0);
  }, []);

  const scrollNext = useCallback((e) => {
    const scrollContainer = containerRef?.current as HTMLDivElement;
    let found = false;
    let scrollTo = 0;
    scrollContainer.querySelectorAll("figure").forEach((figure) => {
      if (found) return;
      scrollTo = scrollTo + figure.offsetWidth + 16;
      if (scrollContainer.scrollLeft < scrollTo) {
        found = true;
      }
    });
    scrollContainer.scrollTo(scrollTo, 0);
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef?.current as HTMLDivElement;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative lg:sr-only">
      <div
        ref={containerRef}
        className="scrollbar-none mx-[min(-1rem,calc((100vw-1280px)/-2)-1rem)] w-[calc(100vw-8px)] overflow-x-scroll pl-[max(1rem,calc(((100vw-1280px)/2)+1rem))] pr-4 "
      >
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${codeBlocks?.length}, max-content) 1px`,
          }}
        >
          {codeBlocks?.map(({ caption, description, code }) => {
            return (
              <figure key={caption} className="relative flex flex-col gap-4">
                <div className="scrollbar-none h-full h-[410px] overflow-y-scroll rounded-md bg-slate-900 p-3 pt-8 text-sm shadow-2xl">
                  <header className="absolute top-2 -mx-3 flex w-full justify-between px-3">
                    <i className="flex gap-1.5">
                      <button
                        tabIndex={-1}
                        aria-hidden
                        className="h-3 w-3 rounded-full bg-slate-700/50 transition-colors h:bg-[#EC6A5F]"
                      />
                      <button
                        tabIndex={-1}
                        aria-hidden
                        className="h-3 w-3 rounded-full bg-slate-700/50 transition-colors h:bg-[#F4BF50]"
                      />
                      <button
                        tabIndex={-1}
                        aria-hidden
                        className="h-3 w-3 rounded-full bg-slate-700/50 transition-colors h:bg-[#61C454]"
                      />
                    </i>
                    <button
                      className=" text-base transition-colors hf:text-white"
                      onClick={() => copyToClipboard(code)}
                      type="button"
                    >
                      <FiCopy />
                    </button>
                  </header>
                  <Code code={code} language="tsx" plugins={["highlight-keywords"]} />
                </div>
                <figcaption>
                  <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">{caption}</h3>
                  <p className="text-sm ">{description}</p>
                </figcaption>
              </figure>
            );
          })}
          <div />
        </div>
      </div>

      <button
        aria-hidden="true"
        onClick={scrollPrev}
        className={clsx(
          "group absolute top-[200px] left-2 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-xl ring-1 transition-all active:translate-y-0.5 lg:hidden",
          showPrev && "sm:flex"
        )}
      >
        <HiChevronLeft className="group-hover:hidden" />
        <HiArrowSmLeft className="hidden group-hover:flex" />
      </button>
      <button
        aria-hidden="true"
        onClick={scrollNext}
        className={clsx(
          "group absolute top-[200px] right-2  hidden h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-xl ring-1 transition-all active:translate-y-0.5 lg:hidden",
          showNext && "sm:flex"
        )}
      >
        <HiChevronRight className="group-hover:hidden" />
        <HiArrowSmRight className="hidden group-hover:flex" />
      </button>
    </div>
  );
};

export const DesktopCodeSelector: FC<
  Omit<CodeComponentProps, "contentBlock" | "filename"> & {
    sectionRef?: RefObject<HTMLDivElement>;
  }
> = ({ codeBlocks, sectionRef }) => {
  const [selected, setSelected] = useState(0);

  const handleCodeContainerScroll = useCallback((e) => {
    const { scrollTop } = e.target;
    const codeBlockElements = e.target.querySelectorAll("[data-selected-index]");
    const { clientHeight: parentHeight } = e.target.parentElement;

    let totalHeight = 0;
    for (let i = 0; i < codeBlockElements.length; i++) {
      totalHeight += codeBlockElements[i].offsetHeight;

      if (parentHeight / 2 < totalHeight - scrollTop) {
        setSelected(i);
        break;
      }
    }
  }, []);

  const handleSelect = useCallback((index: number) => {
    setSelected(index);
    const codeContainer = sectionRef?.current?.querySelector(".code-container") as HTMLDivElement;
    const codeBlockElements = codeContainer.querySelectorAll(
      "[data-selected-index]"
    ) as NodeListOf<HTMLElement>;

    let totalHeight = 0;

    for (let i = 0; i < codeBlockElements.length; i++) {
      if (index === i) {
        break;
      }
      console.log(index);
      totalHeight += codeBlockElements[i].offsetHeight;
    }
    console.log({ totalHeight });
    scrollTo(250, totalHeight, codeContainer);
  }, [sectionRef]);

  useEffect(() => {
    sectionRef?.current?.querySelectorAll("[data-selected-index]").forEach((element) => {
      element.classList.add("code-inactive");
      if (+(element.getAttribute("data-selected-index") ?? -1) === selected) {
        element.classList.remove("code-inactive");
      }
    });
  }, [sectionRef, selected]);

  useEffect(() => {
    const codeContainer = sectionRef?.current?.querySelector(".code-container") as HTMLDivElement;
    codeContainer.addEventListener("scroll", handleCodeContainerScroll);
    return () => codeContainer.removeEventListener("scroll", handleCodeContainerScroll);
  }, [handleCodeContainerScroll, sectionRef]);

  return (
    <section aria-hidden="true" className="hidden flex-col gap-2 lg:flex">
      {codeBlocks?.map(({ caption, description }, index) => {
        return (
          <button
            key={caption}
            onClick={() => {
              handleSelect(index);
            }}
            className={clsx(
              "-ml-4 rounded-lg p-4 text-left will-change-transform hf:-translate-y-0.5 hf:bg-white hf:shadow-lg",
              selected === index && "-translate-y-0.5 bg-white shadow-lg"
            )}
            style={{
              transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
            }}
            type="button"
          >
            <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">{caption}</h3>
            <p className="text-sm font-light leading-relaxed">{description}</p>
          </button>
        );
      })}
    </section>
  );
};

export const DesktopCodeBrowser: FC<Omit<CodeComponentProps, "contentBlock">> = ({
  codeBlocks,
  filename,
}) => {
  const [copyToClipboard] = useCopyToClipboard();

  return (
    <figure className=" hidden h-full w-full lg:block">
      <div className="h-full rounded-xl bg-slate-900 p-3 shadow-2xl drop-shadow-2xl">
        <header className="mb-3 grid items-center" style={{ gridTemplateColumns: "50px 1fr 50px" }}>
          <i className="flex gap-1.5">
            <button
              tabIndex={-1}
              aria-hidden
              className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#EC6A5F]"
            />
            <button
              tabIndex={-1}
              aria-hidden
              className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#F4BF50]"
            />
            <button
              tabIndex={-1}
              aria-hidden
              className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#61C454]"
            />
          </i>
          <h4 className="select-none text-center text-[13px] leading-none tracking-wide text-slate-500">
            {filename}
          </h4>
          <div className="flex justify-end">
            <button
              className="transition-colors hf:text-white"
              onClick={() =>
                copyToClipboard(
                  codeBlocks
                    ?.map(({ code }) => {
                      return code;
                    })
                    .join("\n") ?? ""
                )
              }
              type="button"
            >
              <FiCopy />
            </button>
          </div>
        </header>
        <div className="relative h-[calc(100%-28px)] before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-slate-900">
          <div className="code-container scrollbar-none absolute inset-0 w-auto w-full overflow-y-scroll font-mono text-sm">
            <div>
              <CodeGroup
                plugins={["highlight-keywords"]}
                language="tsx"
                code={codeBlocks?.map(({ code }) => {
                  return code;
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};
