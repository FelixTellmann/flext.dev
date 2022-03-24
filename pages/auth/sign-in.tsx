import { Checkbox } from "_client/form/checkbox";
import { Divider } from "_client/form/divider";
import { IconButton } from "_client/form/icon-button";
import { TextInput } from "_client/form/text-input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { IoLogoGithub, IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";
import NextLink from "next/link";

type indexProps = {};

const SignIn: FC<indexProps> = ({}) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (session && router.isReady) {
      router.push("/daily");
    }
  }, [router, session, status]);

  return (
    <>
      <div className="flex h-[calc(100vh-66px)] min-h-full flex-col justify-center bg-gray-100 pt-12 sm:px-6 sm:pb-28 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Workflow"
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              action="#"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                signIn("email", {
                  email: emailRef.current?.value,
                  callbackUrl: "http://localhost:3000/",
                });
              }}
            >
              <TextInput
                required
                autoComplete="email"
                forwardRef={emailRef}
                label="Email address"
                name="email"
                type="email"
              />

              <button
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6">
              <Divider content="Or continue with" />

              <div className="mt-6 grid grid-cols-3 gap-3">
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
