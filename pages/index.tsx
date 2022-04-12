import clsx from "clsx";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
type IndexProps = {};

export interface CodeProps {
  children: string;
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

export const Code: React.FC<CodeProps> = ({ language, children, plugins, lineHighlight }) => {
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
  }, [children, language, loadDependencies]);

  return (
    <pre className={clsx(plugins, lineHighlight && "line-highlight")} data-line={lineHighlight}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export const Index: FC<IndexProps> = ({}) => {
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
              <button
                className="-ml-4 rounded-lg p-4 text-left will-change-transform hfa:-translate-y-0.5 hfa:bg-white hfa:shadow-lg "
                style={{
                  transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
                }}
                type="button"
              >
                <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">Unstyled</h3>
                <p className="text-sm font-light leading-relaxed">
                  No need to override styles, no specificity wars.
                </p>
              </button>
              <button
                className="-ml-4 rounded-lg p-4 text-left will-change-transform hfa:-translate-y-0.5 hfa:bg-white hfa:shadow-lg "
                style={{
                  transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
                }}
                type="button"
              >
                <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">Unstyled</h3>
                <p className="text-sm font-light leading-relaxed">
                  No need to override styles, no specificity wars.
                </p>
              </button>
              <button
                className="-ml-4 rounded-lg p-4 text-left will-change-transform hfa:-translate-y-0.5 hfa:bg-white hfa:shadow-lg "
                style={{
                  transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
                }}
                type="button"
              >
                <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">Unstyled</h3>
                <p className="text-sm font-light leading-relaxed">
                  No need to override styles, no specificity wars.
                </p>
              </button>
              <button
                className="-ml-4 rounded-lg p-4 text-left will-change-transform hfa:-translate-y-0.5 hfa:bg-white hfa:shadow-lg "
                style={{
                  transition: `transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear`,
                }}
                type="button"
              >
                <h3 className="mb-0.5 text-[15px] font-semibold text-slate-900">Unstyled</h3>
                <p className="text-sm font-light leading-relaxed">
                  No need to override styles, no specificity wars.
                </p>
              </button>
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
                    aria-hidden
                    className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#EC6A5F]"
                  />
                  <button
                    aria-hidden
                    className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#F4BF50]"
                  />
                  <button
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
              <div className="relative h-[calc(100%-28px)] before:absolute b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-slate-900 ">
                <div className="scrollbar-none absolute inset-0 w-auto w-full overflow-y-scroll font-mono text-sm">
                  <Code
                    // lineHighlight="12-14,1,2,3"
                    plugins={["line-numbers", "highlight-keywords"]}
                    language="tsx"
                  >{`// Add styles with your preferred CSS technology
const TooltipContent: string[] = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
});
// Compose a custom Tooltip component
export const StatusTooltip = ({ state, label }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Text>
          <Status variant={state} />
        </Text>
      </Tooltip.Trigger>
      <TooltipContent>
        <Tooltip.Arrow />
        {label}
      </TooltipContent>
    </Tooltip.Root>
  );
};

// Add styles with your preferred CSS technology
const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: 'black',
  borderRadius: '3px',
  padding: '5px'
});

const PopoverContent = styled(Popover.Content, {
  backgroundColor: 'white',
  boxShadow: '0 2px 10px -3px rgb(0 0 0 / 20%)',
  borderRadius: '3px',
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  boxShadow: '0 3px 15px -4px rgb(0 0 0 / 30%)',
  borderRadius: '5px',
});

// Compose a custom Tooltip component
export const StatusTooltip = ({ state, label }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Text>
          <Status variant={state} />
        </Text>
      </Tooltip.Trigger>
      <TooltipContent>
        <Tooltip.Arrow />
        {label}
      </TooltipContent>
    </Tooltip.Root>
  );
};

// Compose a Popover with custom focus and positioning
export const DeploymentPopover = ({ children }) => {
  const popoverCloseButton = React.useRef(null);
  return (
    <Popover.Root>
      <Popover.Trigger>View deployment</Popover.Trigger>
      <PopoverContent
        align="start"
        collisionTolerance={10}
        portalled={false}
        onOpenAutoFocus={(event) => {
          // Focus the close button when popover opens
          event.preventDefault();
          popoverCloseButton.current?.focus();
        }}
      >
        {children}
        <Popover.Close ref={popoverCloseButton}>
          Close
        </Popover.Close>
      </PopoverContent>
    </Popover.Root>
  );
};

// Compose a Dialog with custom focus management
export const InfoDialog = ({ children }) => {
  const dialogCloseButton = React.useRef(null);
  return (
    <Dialog.Root>
      <Dialog.Trigger>View details</Dialog.Trigger>
      <Dialog.Overlay />
      <DialogContent
        onOpenAutoFocus={(event) => {
          // Focus the close button when dialog opens
          event.preventDefault();
          dialogCloseButton.current?.focus();
        }}
      >
        {children}
        <Dialog.Close ref={dialogCloseButton}>
          Close
        </Dialog.Close>
      </DialogContent>
    </Dialog.Root>
  );
};
`}</Code>
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
