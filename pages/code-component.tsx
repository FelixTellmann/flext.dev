import { CodeComponent } from "_client/code-component";
import fs from "fs";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import { ContentBlockProps } from "_client/content-block";

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
          language: "tsx",
        },
        {
          caption: "Composable",
          description: "Granular access to each component part.",
          code: fs.readFileSync("./content/examples/test-2.txt", { encoding: "utf-8" }),
          language: "tsx",
        },
        {
          caption: "Customizable",
          description: "Configure behavior, control focus, add event listeners.",
          code: fs.readFileSync("./content/examples/test-3.txt", { encoding: "utf-8" }),
          language: "tsx",
        },
        {
          caption: "Consistent",
          description: "Components with similar functionality share similar API.",
          code: fs.readFileSync("./content/examples/test-4.txt", { encoding: "utf-8" }),
          language: "tsx",
        },
      ],
    }, // will be passed to the page component as props
  };
};

export default (
  props: JSX.IntrinsicAttributes & {
    codeBlocks: {
      caption: string;
      code: string;
      description: string;
      language: "javascript" | "typescript" | "jsx" | "tsx";
    }[];
    filename: string;
    contentBlock?: ContentBlockProps | undefined;
  } & { children?: ReactNode }
) => <CodeComponent {...props} mergeOnDesktop container />;
