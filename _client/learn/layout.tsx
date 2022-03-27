import { FC, ReactNode } from "react";

type LayoutProps = {
  Article: ReactNode;
  ArticleNav: ReactNode;
  MobileNav: ReactNode;
  PrimaryNav: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ MobileNav, PrimaryNav, Article, ArticleNav }) => {
  return (
    <>
      <div className="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
        {MobileNav}
      </div>
      <div className="bg">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8">
          <aside className="fixed inset-0 top-[66px] left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block">
            {PrimaryNav}
          </aside>
          <main className="lg:pl-[19.5rem]">
            <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
              {Article}
            </div>
            <aside className="fixed top-[66px] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
              {ArticleNav}
            </aside>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
