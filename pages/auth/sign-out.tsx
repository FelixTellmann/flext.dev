import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

export const SignOut: FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      signOut({ callbackUrl: "http://localhost:3000/" });
    }
  });

  return <></>;
};

export default SignOut;
