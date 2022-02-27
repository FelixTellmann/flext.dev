import { FC, ReactNode } from "react";

export type PageProps = {
  subtitle: string;
  title: string;
};
export const Page: FC<PageProps> = ({ children, subtitle, title }) => {
  console.log("asd");
  return (
    <div className="bg-gray-100 dark:bg-dark-bg">
      <div className="py-16 px-4 mx-auto w-full max-w-[1024px]">
        <div className="pb-5 mb-8 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-dark-headings">
            {title}
          </h3>
          <p className="mt-2 max-w-4xl text-sm text-gray-500 dark:text-dark-text">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
