import { FC } from "react";

type PageProps = {};

export const Page: FC<PageProps> = (props) => {
  return (
    <>
      <header className="mx-4 h-24 bg-slate-100 border-b border-slate-300 sm:mx-8">
        <div className="flex justify-center items-center p-4 mx-auto max-w-6xl h-24 bg-gray-200 border border-gray-400 border-dashed">
          Header
        </div>
      </header>
      <section className="mx-4 bg-slate-100 border-b border-slate-300 sm:mx-8">
        <div className="flex relative justify-center items-center p-4 mx-auto max-w-6xl h-[420px] bg-cyan-100 border border-gray-400 border-dashed">
          <div className="flex overflow-hidden absolute inset-0 justify-center items-center bg-gray-100">
            <svg className="w-full h-full stroke-gray-400">
              <line x1="0" x2="100%" y1="100%" y2="0" />
              <line x1="0" x2="100%" y1="0" y2="100%" />
            </svg>
          </div>
          <div className="relative">Hero image</div>
        </div>
      </section>
      <section className="mx-4 bg-slate-100 border-b border-slate-300 sm:mx-8">
        <div className="flex relative justify-center items-center p-4 mx-auto max-w-6xl h-[420px] bg-cyan-100 border border-gray-400 border-dashed"></div>
      </section>

      <footer className="mx-4 h-72 bg-slate-100 border-b border-slate-300 sm:mx-8">
        <div className="flex justify-center items-center p-4 mx-auto max-w-6xl h-full bg-gray-200 border border-gray-400 border-dashed">
          Footer
        </div>
      </footer>
    </>
  );
};

export default Page;
