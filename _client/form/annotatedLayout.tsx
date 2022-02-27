import { FC } from "react";

type AnnotatedLayoutProps = {
  description: string;
  title: string;
};

export const AnnotatedLayout: FC<AnnotatedLayoutProps> = ({ description, title, children }) => {
  console.log("asd");
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-dark-headings">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-dark-text">{description}</p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="py-5 px-4 space-y-6 bg-white dark:bg-dark-card sm:p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
