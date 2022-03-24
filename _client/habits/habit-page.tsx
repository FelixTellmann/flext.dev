import { FC } from "react";

export const HabitPage: FC<{ subtitle: string; title: string }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="min-h-[calc(100vh-66px)] bg-bg dark:bg-dark-bg">
    <div className="mx-auto max-w-[1024px] px-4">
      <>
        <div className="pt-12 pb-5">
          <div className="sm:flex sm:items-end sm:justify-between">
            <div className="sm:w-0 sm:flex-1">
              <h1
                className="text-lg font-medium text-gray-900 dark:text-dark-headings"
                id="message-heading"
              >
                {title}
              </h1>
              <p className="mt-1 overflow-hidden overflow-ellipsis text-sm text-gray-500 dark:text-dark-text">
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
