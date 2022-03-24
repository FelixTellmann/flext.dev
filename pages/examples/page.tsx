import { FC } from "react";

type PageProps = {};

export const Page: FC<PageProps> = (props) => {
  return (
    <>
      <header className="mx-4 h-24 border-b border-slate-300 bg-slate-100 sm:mx-8">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-center border border-dashed border-gray-400 bg-gray-200 p-4">
          Header
        </div>
      </header>
      <section className="mx-4 border-b border-slate-300 bg-slate-100 sm:mx-8">
        <div className="relative mx-auto flex h-[420px] max-w-6xl items-center justify-center border border-dashed border-gray-400 bg-cyan-100 p-4">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-100">
            <svg className="h-full w-full stroke-gray-400">
              <line x1="0" x2="100%" y1="100%" y2="0" />
              <line x1="0" x2="100%" y1="0" y2="100%" />
            </svg>
          </div>
          <div className="relative">Hero image</div>
        </div>
      </section>
      <section className="mx-4 border-b border-slate-300 bg-slate-100 sm:mx-8">
        <div className="relative mx-auto flex h-[420px] max-w-6xl items-center justify-center border border-dashed border-gray-400 bg-cyan-100 p-4"></div>
      </section>

      <footer className="mx-4 h-72 border-b border-slate-300 bg-slate-100 sm:mx-8">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center border border-dashed border-gray-400 bg-gray-200 p-4">
          Footer
        </div>
      </footer>
    </>
  );
};

export default Page;
