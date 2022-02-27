import { Checkbox } from "_client/form/checkbox";
import { Divider } from "_client/form/divider";
import { IconButton } from "_client/form/icon-button";
import { TextInput } from "_client/form/text-input";
import { signIn } from "next-auth/react";
import { FC, useRef } from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";
import NextLink from "next/link";

type indexProps = {};

const SignIn: FC<indexProps> = ({}) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex flex-col justify-center pt-12 h-[calc(100vh-66px)] min-h-full bg-gray-100 sm:px-6 sm:pb-28 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Workflow"
            className="mx-auto w-auto h-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
            <form action="#" className="space-y-6" method="POST">
              <TextInput
                required
                autoComplete="email"
                forwardRef={emailRef}
                label="Email address"
                name="email"
                type="email"
              />
              <TextInput
                required
                autoComplete="current-password"
                forwardRef={passwordRef}
                label="Password"
                name="password"
                type="password"
              />

              <div className="flex justify-between items-center">
                <Checkbox forwardRef={rememberRef} label="Remember me" />

                <NextLink href="#">
                  <a className="flex text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </NextLink>
              </div>

              <button
                className="flex justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                type="submit"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6">
              <Divider content="Or continue with" />

              <div className="grid grid-cols-3 gap-3 mt-6">
                <IconButton
                  content="Sign in with Google"
                  icon={<IoLogoGoogle />}
                  onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })}
                />
                <IconButton
                  content="Sign in with Twitter"
                  icon={<IoLogoTwitter />}
                  onClick={() => signIn("twitter", { callbackUrl: "http://localhost:3000/" })}
                />
                <IconButton
                  content="Sign in with GitHub"
                  icon={<IoLogoGithub />}
                  onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/" })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
