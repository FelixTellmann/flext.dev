import clsx from "clsx";
import Prism from "prismjs";
import { FC, useCallback, useEffect } from "react";

export type CodeProps = {
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
};

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
      className={clsx(plugins, lineHighlight && "line-highlight", `language-${language}`)}
      data-line={lineHighlight}
    >
      <code className={`text-sm language-${language}`}>{code}</code>
    </pre>
  );
};
