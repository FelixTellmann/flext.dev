export function Article() {
  return (
    <>
      <header className="relative z-20" id="header">
        <div>
          <p className="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
            Layout
          </p>
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              Display
            </h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
          Utilities for controlling the display box type of an element.
        </p>
      </header>
      <div className="relative mt-10">
        <h2
          className="group relative -ml-4 flex scroll-mt-[var(--scroll-mt)] whitespace-pre-wrap pl-4"
          id="class-reference"
        >
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#class-reference"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>
            <span className="sr-only">Quick reference</span>
          </span>
        </h2>
        <div className="scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 supports-scrollbars:pr-2 max-h-96 overflow-hidden lg:max-h-96 lg:overflow-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky top-0 z-10 bg-white p-0 text-sm font-semibold leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  <div className="border-b border-slate-200 py-2 pr-2 dark:border-slate-400/20">
                    Class
                  </div>
                </th>
                <th className="sticky top-0 z-10 bg-white p-0 text-sm font-semibold leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  <div className="border-b border-slate-200 py-2 pl-2 dark:border-slate-400/20">
                    Properties
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="align-baseline">
              <tr>
                <td
                  className="whitespace-nowrap py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:text-sky-400"
                  translate="no"
                >
                  block
                </td>
                <td
                  className="whitespace-pre py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: block;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  inline-block
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: inline-block;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  inline
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: inline;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  flex
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: flex;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  inline-flex
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: inline-flex;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  inline-table
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: inline-table;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-caption
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-caption;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-cell
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-cell;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-column
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-column;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-column-group
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-column-group;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-footer-group
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-footer-group;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-header-group
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-header-group;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-row-group
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-row-group;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  table-row
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: table-row;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  flow-root
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: flow-root;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  grid
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: grid;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  inline-grid
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: inline-grid;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  contents
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: contents;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  list-item
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: list-item;
                </td>
              </tr>
              <tr>
                <td
                  className="whitespace-nowrap border-t border-slate-100 py-2 pr-2 font-mono text-xs font-medium leading-6 text-sky-500 dark:border-slate-400/10 dark:text-sky-400"
                  translate="no"
                >
                  hidden
                </td>
                <td
                  className="whitespace-pre border-t border-slate-100 py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 dark:border-slate-400/10 dark:text-indigo-300"
                  translate="no"
                >
                  display: display: none;
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sticky bottom-0 -mt-px h-px bg-slate-200 dark:bg-slate-400/20"></div>
        </div>
        <div className="relative inset-x-0 -mt-9 flex justify-center lg:hidden">
          <div className="absolute inset-x-0 -top-8 bottom-0 bg-gradient-to-t from-white dark:from-slate-900"></div>
          <button
            className="dark:highlight-white/5 relative rounded-full bg-white py-2 px-4 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-200"
            type="button"
          >
            Show Show all classes
          </button>
        </div>
      </div>
      <div className="dark:prose-dark prose prose-slate relative z-20 mt-12" id="content-wrapper">
        <h2
          className="group -ml-4 mb-2 flex whitespace-pre-wrap pl-4 text-sm font-semibold leading-6 tracking-normal text-sky-500 dark:text-sky-400"
          id="basic-usage"
        >
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#basic-usage"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Basic usage</span>
        </h2>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="block-and-inline">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#block-and-inline"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Block &amp; Inline</span>
        </h3>
        <p>
          Use <code>inline</code>, <code>inline-block</code>, and <code>block</code> to control the
          flow of text and elements.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="mx-auto max-w-xs bg-white p-4 text-sm leading-6 text-slate-500 shadow-xl dark:bg-slate-800 dark:text-slate-400 sm:text-base sm:leading-7">
                When controlling the flow of text, using the CSS property{" "}
                <span className="inline rounded bg-sky-100 font-mono text-sm font-bold text-slate-900 dark:bg-slate-600 dark:text-slate-200">
                  display: inline
                </span>
                will cause the text inside the element to wrap normally.
                <br />
                <br />
                While using the property
                <span className="inline-block rounded bg-sky-100 font-mono text-sm font-bold text-slate-900 dark:bg-slate-600 dark:text-slate-200">
                  display: inline-block
                </span>
                will wrap the element to prevent the text inside from extending beyond its parent.
                <br />
                <br />
                Lastly, using the property
                <span className="block rounded bg-sky-100 font-mono text-sm font-bold text-slate-900 dark:bg-slate-600 dark:text-slate-200">
                  display: block
                </span>
                will put the element on it's own line and fill its parent.
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            When controlling the flow of text, using the CSS property
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">inline</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            display: inline
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            will cause the text inside the element to wrap normally. While using the property{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">inline-block</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            display: inline-block
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            will wrap the element to prevent the text inside from extending beyond its parent.
            Lastly, using the property{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">block</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            display: block
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            will put the element on it's own line and fill its parent.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="flow-root">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#flow-root"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Flow Root</span>
        </h3>
        <p>
          Use <code>flow-root</code> to create a block-level element with its own{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">
            block formatting context
          </a>
          .
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="mx-auto max-w-xs bg-white p-4 text-sm leading-6 text-slate-500 shadow-xl dark:bg-slate-800 dark:text-slate-400 sm:text-base sm:leading-7">
                <div className="bg-stripes-purple mb-0.5 flow-root">
                  <div className="my-4 bg-white dark:bg-slate-800">
                    Well, let me tell you something, funny boy. Y'know that little stamp, the one
                    that says "New York Public Library"? Well that may not mean anything to you, but
                    that means a lot to me. One whole hell of a lot.
                  </div>
                </div>
                <div className="bg-stripes-purple mt-0.5 flow-root">
                  <div className="my-4 bg-white dark:bg-slate-800">
                    Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making
                    the scene, flaunting convention. Yeah, I know what you're thinking. What's this
                    guy making such a big stink about old library books? Well, let me give you a
                    hint, junior.
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>p-4
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">flow-root</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>my-4 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Well, let me tell you something, ...
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">flow-root</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>my-4 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Sure, go ahead, laugh if you want...
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="flex">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#flex"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Flex</span>
        </h3>
        <p>
          Use <code>flex</code> to create a block-level flex container.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="mx-auto flex max-w-xs justify-center bg-white p-4 leading-6 text-slate-500 shadow-xl dark:bg-slate-800 dark:text-slate-400">
                <div className="flex items-center gap-4 p-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                  />
                  <div className="flex flex-col">
                    <strong className="font-medium text-slate-900 dark:text-slate-200">
                      Andrew Alfred
                    </strong>
                    <span className="font-medium text-slate-500 dark:text-slate-400">
                      Technical advisor
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">flex</span> items-center
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>path/to/image.jpg
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>strong
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Andrew Alfred
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>strong
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Technical advisor
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="inline-flex">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#inline-flex"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Inline Flex</span>
        </h3>
        <p>
          Use <code>inline-flex</code> to create an inline flex container that flows with text.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <p className="mx-auto max-w-lg bg-white p-4 text-sm leading-6 text-slate-500 shadow-xl dark:bg-slate-800 dark:text-slate-400 sm:text-base sm:leading-7">
                Today I spent most of the day researching ways to take advantage of the fact that
                bottles can be returned for 10 cents in Michigan, but only 5 cents here.{" "}
                <span className="ml-1 inline-flex items-baseline">
                  <img
                    alt=""
                    className="mr-1 h-5 w-5 self-center rounded-full"
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                  />
                  <span className="font-medium text-slate-900 dark:text-slate-200">Kramer</span>
                </span>{" "}
                keeps telling me there is no way to make it work, that he has run the numbers on
                every possible approach, but I just have to believe there's a way to make it work,
                there's simply too much opportunity here.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Today I spent most of the day researching ways to ...
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">inline-flex</span> items-baseline
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>img
              </span>{" "}
              <span className="token attr-name">src</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>path/to/image.jpg
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">alt</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>self-center w-5 h-5 rounded-full mx-1
                <span className="token punctuation">"</span>
              </span>{" "}
              <span className="token punctuation">/&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Kramer
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            keeps telling me there is no way to make it work, that ...
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="grid">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#grid"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Grid</span>
        </h3>
        <p>
          Use <code>grid</code> to create a grid container.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl p-8">
              <div className="bg-stripes-fuchsia grid grid-cols-3 grid-rows-3 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">01</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">02</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">03</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">04</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">05</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">06</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">07</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">08</div>
                <div className="rounded-lg bg-fuchsia-500 p-4 shadow-lg">09</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">grid</span> gap-4 grid-cols-3
                grid-rows-3<span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token comment">&lt;!-- ... --&gt;</span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="inline-grid">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#inline-grid"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Inline Grid</span>
        </h3>
        <p>
          Use <code>inline-grid</code> to create an inline grid container.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="w-full space-x-3 overflow-x-scroll whitespace-nowrap p-8">
                <div className="bg-stripes-sky inline-grid grid-cols-3 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">01</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">02</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">03</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">04</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">05</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">06</div>
                </div>
                <div className="bg-stripes-sky inline-grid grid-cols-3 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">01</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">02</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">03</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">04</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">05</div>
                  <div className="h-14 w-14 rounded-lg bg-sky-500 p-4 shadow-lg">06</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">inline-grid</span> grid-cols-3
                gap-4<span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            01
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            02
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            03
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            04
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            05
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            06
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">inline-grid</span> grid-cols-3
                gap-4<span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            01
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            02
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            03
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            04
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            05
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            06
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>span
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="contents">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#contents"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Contents</span>
        </h3>
        <p>
          Use <code>contents</code> to create a “phantom” container whose children act like direct
          children of the parent.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl p-8">
              <div className="bg-stripes-purple flex gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                <div className="flex-1 rounded-lg bg-purple-500 p-4 shadow-lg">01</div>
                <div className="contents">
                  <div className="flex-1 rounded-lg bg-purple-500 p-4 shadow-lg">02</div>
                  <div className="flex-1 rounded-lg bg-purple-500 p-4 shadow-lg">03</div>
                </div>
                <div className="flex-1 rounded-lg bg-purple-500 p-4 shadow-lg">04</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex-1 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            01
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>contents
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex-1 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            02
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex-1 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            03
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex-1 ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            04
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="table">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#table"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Table</span>
        </h3>
        <p>
          Use the <code>table</code>, <code>.table-row</code>, <code>.table-cell</code>,{" "}
          <code>.table-caption</code>, <code>.table-column</code>, <code>.table-column-group</code>,{" "}
          <code>.table-header-group</code>, <code>table-row-group</code>, and{" "}
          <code>.table-footer-group</code> utilities to create elements that behave like their
          respective table elements.
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="my-8 overflow-hidden shadow-sm">
                <div className="table w-full table-auto border-collapse text-sm">
                  <div className="table-header-group">
                    <div className="table-row">
                      <div className="table-cell border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                        Song
                      </div>
                      <div className="table-cell border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                        Artist
                      </div>
                      <div className="table-cell border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                        Year
                      </div>
                    </div>
                  </div>
                  <div className="table-row-group bg-white dark:bg-slate-800">
                    <div className="table-row">
                      <div className="table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                      </div>
                      <div className="table-cell border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        Malcolm Lockyer
                      </div>
                      <div className="table-cell border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        1961
                      </div>
                    </div>
                    <div className="table-row">
                      <div className="table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        Witchy Woman
                      </div>
                      <div className="table-cell border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        The Eagles
                      </div>
                      <div className="table-cell border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        1972
                      </div>
                    </div>
                    <div className="table-row">
                      <div className="table-cell border-b border-slate-200 p-4 pl-8 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                        Shining Star
                      </div>
                      <div className="table-cell border-b border-slate-200 p-4 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                        Earth, Wind, and Fire
                      </div>
                      <div className="table-cell border-b border-slate-200 p-4 pr-8 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                        1975
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table</span> w-full ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-header-group</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-row</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> text-left ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Song
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> text-left ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Artist
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> text-left ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Year
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-row-group</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-row</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            The Sliding Mr. Bones (Next Stop, Pottersville)
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Malcolm Lockyer
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1961
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-row</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Witchy Woman
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            The Eagles
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1972
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-row</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Shining Star
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Earth, Wind, and Fire
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">table-cell</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1975
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <h3 className="group -ml-4 flex whitespace-pre-wrap pl-4" id="hidden">
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#hidden"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Hidden</span>
        </h3>
        <p>
          Use <code>hidden</code> to set an element to <code>display: none</code> and remove it from
          the page layout (compare with <code>.invisible</code> from the{" "}
          <a href="/docs/visibility#invisible">visibility</a> documentation).
        </p>
        <div className="mt-4 -mb-3">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div
              className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ backgroundPosition: "10px 10px" }}
            ></div>
            <div className="relative overflow-auto rounded-xl p-8">
              <div className="bg-stripes-purple flex gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
                <div className="hidden h-14 w-14 rounded-lg bg-purple-500 p-4 shadow-lg">01</div>
                <div className="h-14 w-14 rounded-lg bg-purple-500 p-4 shadow-lg">02</div>
                <div className="h-14 w-14 rounded-lg bg-purple-500 p-4 shadow-lg">03</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
        </div>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>
                <span className="code-highlight bg-code-highlight">hidden</span> ...
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            01
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            02
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            03
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <hr />
        <h2
          className="group -ml-4 mb-2 flex whitespace-pre-wrap pl-4 text-sm font-semibold leading-6 tracking-normal text-sky-500 dark:text-sky-400"
          data-docsearch-ignore=""
          id="applying-conditionally"
        >
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#applying-conditionally"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Applying conditionally</span>
        </h2>
        <h3
          className="group -ml-4 flex whitespace-pre-wrap pl-4"
          data-docsearch-ignore=""
          id="hover-focus-and-other-states"
        >
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#hover-focus-and-other-states"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Hover, focus, and other states</span>
        </h3>
        <p>
          Tailwind lets you conditionally apply utility classes in different states using variant
          modifiers. For example, use <code>hover:inline-flex</code> to only apply the{" "}
          <code>inline-flex</code> utility on hover.
        </p>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex{" "}
                <span className="code-highlight bg-code-highlight">hover:inline-flex</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token comment">&lt;!-- ... --&gt;</span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <p>
          For a complete list of all available state modifiers, check out the{" "}
          <a href="/docs/hover-focus-and-other-states">Hover, Focus, &amp; Other States</a>{" "}
          documentation.
        </p>
        <h3
          className="group -ml-4 flex whitespace-pre-wrap pl-4"
          data-docsearch-ignore=""
          id="breakpoints-and-media-queries"
        >
          <a
            aria-label="Anchor"
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            href="#breakpoints-and-media-queries"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
              <svg aria-hidden="true" fill="none" height="12" width="12">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </a>
          <span>Breakpoints and media queries</span>
        </h3>
        <p>
          You can also use variant modifiers to target media queries like responsive breakpoints,
          dark mode, prefers-reduced-motion, and more. For example, use <code>md:inline-flex</code>{" "}
          to apply the <code>inline-flex</code> utility at only medium screen sizes and above.
        </p>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>flex{" "}
                <span className="code-highlight bg-code-highlight">md:inline-flex</span>
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token comment">&lt;!-- ... --&gt;</span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <p>
          To learn more, check out the documentation on{" "}
          <a href="/docs/responsive-design">Responsive Design</a>,{" "}
          <a href="/docs/dark-mode">Dark Mode</a> and{" "}
          <a href="/docs/hover-focus-and-other-states#media-queries">other media query modifiers</a>
          .
        </p>
      </div>
      <footer className="mt-12 text-sm leading-6">
        <div className="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
          <a
            className="group flex items-center hover:text-slate-900 dark:hover:text-white"
            href="/docs/box-sizing"
          >
            <svg
              className="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              viewBox="0 0 3 6"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            Box Sizing
          </a>
          <a
            className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
            href="/docs/float"
          >
            Floats
            <svg
              className="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              viewBox="0 0 3 6"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
        </div>
        <div className="justify-between border-t border-slate-200 pt-10 pb-28 text-slate-500 dark:border-slate-200/5 sm:flex">
          <div className="mb-6 sm:mb-0 sm:flex">
            <p>Copyright © 2022 Tailwind Labs Inc.</p>
            <p className="sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-slate-200/5">
              <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">
                Trademark Policy
              </a>
            </p>
          </div>
          <a
            className="hover:text-slate-900 dark:hover:text-slate-400"
            href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/display.mdx"
          >
            Edit this page on GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
