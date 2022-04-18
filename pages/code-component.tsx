import { ContentBlock, ContentBlockProps } from "_client/content-block";
import clsx from "clsx";
import fs from "fs";
import { GetStaticProps } from "next";
import Prism, { Token } from "prismjs";
import { FC, ReactNode, useCallback, useEffect } from "react";

type CodeComponentProps = {
  contentBlock: ContentBlockProps;
  codeBlocks?: {
    caption: string;
    code: string;
    description: string;
  }[];
  filename?: string;
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
  return (
    <div className="mx-auto max-w-7xl bg-gradient1 py-20">
      <div className="flex flex-col px-4">
        <ContentBlock {...contentBlock} />
        <section className="scrollbar-none -mx-4 overflow-x-scroll px-4">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${codeBlocks?.length}, max-content) 1px`,
            }}
          >
            {codeBlocks.map(({ caption, description, code }) => {
              return (
                <figure key={caption} className="flex flex-col gap-4">
                  <div className="scrollbar-none h-full h-[410px] overflow-y-scroll rounded-md bg-slate-900 p-3 shadow-2xl">
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
        </section>
      </div>
    </div>
  );
};

export default CodeComponent;

export interface CodeProps {
  code: string;
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

export const Code: FC<CodeProps> = ({ language, plugins, lineHighlight, code }) => {
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
      className={clsx(
        plugins,
        lineHighlight && "line-highlight",
        `language-${language}`,
        "text-sm"
      )}
      data-line={lineHighlight}
    >
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
