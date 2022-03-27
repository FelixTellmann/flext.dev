import { FC } from "react";

type IndexProps = {};

type responsiveSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const classNames = (...className: string[]): string => {
  return className.filter(Boolean).join(" ");
};

export const Index: FC<IndexProps> = (props) => {
  return (
    <>
      <div className="max-w-8xl md:px- mx-auto h-20 px-4 sm:px-6">
        <div className="fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block"></div>
        <div className="bg-gray-500 lg:pl-[19.5rem]">
          <div>asd</div>
        </div>
      </div>
    </>
  );
};

export default Index;
