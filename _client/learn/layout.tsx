import { FC } from "react";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <main className="bg">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8">
          <div className="lg:pl-[310px]">
            <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
