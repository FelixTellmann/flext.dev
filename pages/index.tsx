import { ProgressCalendar } from "_client/progressCalendar";
import { FC, useCallback, useState } from "react";

type indexProps = {};

const Page: FC<{ subtitle: string; title: string }> = ({ title, subtitle, children }) => (
  <div className="min-h-[calc(100vh-66px)] bg-bg dark:bg-dark-bg">
    <div className="px-4 mx-auto max-w-[1024px]">
      <>
        <div className="pt-12 pb-5">
          <div className="sm:flex sm:justify-between sm:items-end">
            <div className="sm:flex-1 sm:w-0">
              <h1
                className="text-lg font-medium text-gray-900 dark:text-dark-headings"
                id="message-heading"
              >
                {title}
              </h1>
              <p className="overflow-hidden mt-1 text-sm text-gray-500 dark:text-dark-text overflow-ellipsis">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </>
      {children}
    </div>
  </div>
);

const Index: FC<indexProps> = ({}) => {
  const title = "Full-Stack Developer";
  const subtitle = "Checkout and Payments Team";
  return (
    <Page subtitle={subtitle} title={title}>
      <ProgressCalendar />
    </Page>
  );
};

export default Index;
