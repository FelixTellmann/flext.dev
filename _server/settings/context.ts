import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { DB } from "_server/settings/prisma";
import { getSession } from "next-auth/react";

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
  const session = await getSession({ req });

  return {
    req,
    res,
    DB,
    session,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
