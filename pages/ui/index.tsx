import { FC } from "react";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <div className="h-[calc(100vh-66px)] bg-gradient-to-br from-teal-400 to-blue-400">
        <div className="flex flex-col gap-16 py-16 px-4 mx-auto max-w-6xl">
          {/*= =============== 1. Heading ================ */}
          <div className="py-16 px-4 bg-white rounded shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold tracking-tight text-pink-600 uppercase">
                Section Heading
              </h2>
              <div
                className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900"
                role="doc-subtitle"
              >
                Why you need section headings.
              </div>
              <div aria-hidden="true" className="my-2 mx-auto w-32 h-1 bg-pink-600 rounded" />
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                Start building for free, then add a site plan to go live. Account plans unlock
                additional features.
              </p>
            </div>
          </div>
          {/*= =============== 1. Heading ================ */}
          <div className="py-16 px-4 bg-white rounded shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold tracking-tight text-pink-600 uppercase">
                Section Heading
              </h2>
              <div
                className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900"
                role="doc-subtitle"
              >
                Why you need section headings.
              </div>
              <div aria-hidden="true" className="my-2 mx-auto w-32 h-1 bg-pink-600 rounded" />
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                Start building for free, then add a site plan to go live. Account plans unlock
                additional features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
