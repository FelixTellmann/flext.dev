import { BrowserIframe } from "_client/_components/browser-iframe";
import { FC } from "react";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <ArticleHeading
        section="Layout"
        title="Headers"
        description="Beautiful headers for any page layout anywhere. "
      />
      <BrowserIframe url="/examples/layout/header1" height="20rem" />
    </>
  );
};

export default Index;

function ArticleHeading({
  title,
  description,
  section,
}: {
  section: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative z-20 mb-10 max-w-2xl" id="header">
      <div>
        <p className="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
          {section}
        </p>
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl ">
            {title}
          </h1>
        </div>
      </div>
      {description && <p className="mt-2 text-lg text-slate-500">{description}</p>}
    </header>
  );
}
