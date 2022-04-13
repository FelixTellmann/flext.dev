import clsx from "clsx";
import fs from "fs";
import { GetStaticProps } from "next";
import Prism from "prismjs";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { FC, useCallback, useEffect, useRef } from "react";
import { FiCopy } from "react-icons/fi";

type IndexProps = {
  codeBlocks: { code: string; description: string; title: string }[];
};

export interface CodeProps {
  activeIndex: number;
  code: string[];
  language:
    | "js"
    | "css"
    | "json"
    | "jsx"
    | "typescript"
    | "tsx"
    | "yml"
    | "Rust"
    | "bash"
    | "javascript";
  lineHighlight?: string;
  plugins?: ("line-numbers" | "highlight-keywords")[];
}

export const Code: FC<CodeProps> = ({ language, plugins, lineHighlight, code, activeIndex }) => {
  const loadDependencies = useCallback(async () => {
    if (language === "tsx") {
      // @ts-ignore
      await import(`prismjs/components/prism-jsx`);
      // @ts-ignore
      await import(`prismjs/components/prism-typescript`);
    }
    await import(`prismjs/components/prism-${language}`);
    if (plugins?.includes("line-numbers")) {
      // @ts-ignore
      await import("prismjs/plugins/line-numbers/prism-line-numbers.js");
    }
    if (plugins?.includes("highlight-keywords")) {
      // @ts-ignore
      await import("prismjs/plugins/highlight-keywords/prism-highlight-keywords.js");
    }

    if (lineHighlight) {
      // @ts-ignore
      await import("prismjs/plugins/line-highlight/prism-line-highlight.js");
    }

    Prism.highlightAll();
  }, [language, lineHighlight, plugins]);

  useEffect(() => {
    loadDependencies();
  }, [language, loadDependencies]);

  return (
    <pre
      className={clsx(plugins, lineHighlight && "line-highlight", `language-${language}`)}
      data-line={lineHighlight}
    >
      {code?.map((str, i) => {
        if (i === activeIndex) {
          return (
            <code key={i} className={`language-${language}`}>
              {code}
            </code>
          );
        }
        return (
          <code key={i} className={`language-${language} inactive`}>
            {code}
          </code>
        );
      })}
    </pre>
  );
};

export const Index: FC<IndexProps> = ({ codeBlocks }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCodeScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  return (
    <>
      <section className="bg-gradient-to-br from-white to-sky-100 py-16">
        <div className="mx-auto flex max-w-[1280px] gap-8  px-2 sm:px-4 md:px-8 xl:gap-16">
          <div className="max-w-[460px]">
            <div>
              <div className="mb-1 text-[15px] font-semibold text-sky-500">
                Developer Experience to love
              </div>
              <h2 className="mb-4 text-4xl font-semibold text-slate-900">
                Devel with an open, thought-out API
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed">
                One of our main goals is to provide the best possible developer experience. Radix
                Primitives provides a fully-typed API. All components share a similar API, creating
                a consistent and predictable experience.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {codeBlocks?.map(({ title, description }, index) => {
                return (
                  <button
                    key={title}
                    className="-ml-4 rounded-lg p-4 text-left will-change-transform hfa:-translate-y-0.5 hfa:bg-white hfa:shadow-lg "
                    style={{
                      transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
                    }}
                    type="button"
                  >
                    <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm font-light leading-relaxed">{description}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full  rounded-xl bg-slate-900 p-3 shadow-2xl drop-shadow-2xl">
              <div
                className="mb-3 grid items-center"
                style={{ gridTemplateColumns: "50px 1fr 50px" }}
              >
                <figure className="flex gap-1.5">
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
                </figure>
                <h4 className="select-none text-center text-[13px] leading-none tracking-wide text-slate-500">
                  MySuperCoolIndexFile.tsx
                </h4>
                <div className="flex justify-end">
                  <button className="transition-colors hf:text-white" type="button">
                    <FiCopy />
                  </button>
                </div>
              </div>
              <div className="relative h-[calc(100%-28px)] before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-slate-900">
                <div
                  className="scrollbar-none absolute inset-0 w-auto w-full overflow-hidden font-mono text-sm"
                  onScroll={handleCodeScroll}
                >
                  <div ref={scrollContainerRef}>
                    <Code
                      // lineHighlight="12-14,1,2,3"
                      activeIndex={1}
                      plugins={["line-numbers", "highlight-keywords"]}
                      language="tsx"
                      code={codeBlocks?.map(({ code }, index) => {
                        return code;
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const code1 = fs.readFileSync("content/examples/test-1.txt", { encoding: "utf8" });
  const code2 = fs.readFileSync("content/examples/test-2.txt", { encoding: "utf8" });
  const code3 = fs.readFileSync("content/examples/test-3.txt", { encoding: "utf8" });
  return {
    props: {
      codeBlocks: [
        {
          title: "Unstyled",
          description: "No need to override styles, no specificity wars.",
          code: code1,
        },
        {
          title: "Composable",
          description: "Granular access to each component part.",
          code: code2,
        },
        {
          title: "Customizable",
          description: "Configure behavior, control focus, add event listeners.",
          code: code3,
        },
      ],
    },
  };
};
