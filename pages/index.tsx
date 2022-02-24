import { FC } from "react";
import { IoLockClosed } from "react-icons/io5";

type indexProps = {};

const Index: FC<indexProps> = ({}) => {
  return (
    <>
      <div className="px-2 pt-16 mx-auto max-w-[1000px]">
        <>
          {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
          <div className="flex justify-center items-center py-12 px-4 min-h-full sm:px-6 lg:px-8">
            <div className="space-y-8 w-full max-w-md">
              <div>
                <img
                  alt="Workflow"
                  className="mx-auto w-auto h-12"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-center text-gray-600">
                  Or{" "}
                  <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                    start your 14-day free trial
                  </a>
                </p>
              </div>
              <form action="#" className="mt-8 space-y-6" method="POST">
                <input defaultValue="true" name="remember" type="hidden" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label className="sr-only" htmlFor="email-address">
                      Email address
                    </label>
                    <input
                      required
                      autoComplete="email"
                      className="block relative focus:z-10 py-2 px-3 w-full placeholder-gray-500 text-gray-900 rounded-none rounded-t-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 appearance-none focus:outline-none sm:text-sm"
                      id="email-address"
                      name="email"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="password">
                      Password
                    </label>
                    <input
                      required
                      autoComplete="current-password"
                      className="block relative focus:z-10 py-2 px-3 w-full placeholder-gray-500 text-gray-900 rounded-none rounded-b-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 appearance-none focus:outline-none sm:text-sm"
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                    />
                    <label className="block ml-2 text-sm text-gray-900" htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    className="group flex relative justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    type="submit"
                  >
                    <span className="flex absolute inset-y-0 left-0 items-center pl-3">
                      <IoLockClosed
                        aria-hidden="true"
                        className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Index;
