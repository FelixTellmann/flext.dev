import { FC } from "react";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <div className="h-[calc(100vh-66px)] bg-gradient-to-br from-teal-400 to-blue-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 py-16 px-4">
          {/*= =============== 1. Heading ================ */}
          <div className="rounded bg-white py-16 px-4 shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold uppercase tracking-tight text-pink-600">
                Section Heading
              </h2>
              <div
                className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
                role="doc-subtitle"
              >
                Why you need section headings.
              </div>
              <div aria-hidden="true" className="my-2 mx-auto h-1 w-32 rounded bg-pink-600" />
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                Start building for free, then add a site plan to go live. Account plans unlock
                additional features.
              </p>
            </div>
          </div>
          {/*= =============== 1. Heading ================ */}
          <div className="rounded bg-white py-16 px-4 shadow-lg">
            <div className="text-center">
              <h2 className="font-semibold uppercase tracking-tight text-pink-600">
                Section Heading
              </h2>
              <div
                className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
                role="doc-subtitle"
              >
                Why you need section headings.
              </div>
              <div aria-hidden="true" className="my-2 mx-auto h-1 w-32 rounded bg-pink-600" />
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
