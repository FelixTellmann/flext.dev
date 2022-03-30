import clsx from "clsx";
import { FC, useState } from "react";

export const ArticleContainer: FC = ({ children }) => {
  const [hasBreadcrumbNav, setHasBreadcrumbNav] = useState(false);

  return (
    <main className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8">
      <div className="lg:pl-[310px]">
        <article
          className={clsx(
            "mx-auto max-w-3xl pt-10 xl:ml-0 xl:max-w-none",
            hasBreadcrumbNav && "xl:mr-[246px]  xl:pr-16"
          )}
        >
          {children}
        </article>
      </div>
    </main>
  );
};
