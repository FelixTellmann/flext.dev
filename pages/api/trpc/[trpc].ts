import { PrismaAdapter } from "@next-auth/prisma-adapter";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { DB } from "_server/prisma";
import { z } from "zod";

import superjson from "superjson";

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = trpc
  .router<Context>()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .query("hello", {
    input: z.object({ text: z.string().nullish() }).nullish(),
    resolve: ({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(_opts: CreateContextOptions) {
  return {};
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export const createContext = async (opts: trpcNext.CreateNextContextOptions): Promise<Context> => {
  // for API-response caching see https://trpc.io/docs/caching

  const ctx = await createContextInner({});
  return ctx;
};

export default trpcNext.createNextApiHandler({
  router: appRouter,
  /**
   * @link https://trpc.io/docs/context
   */
  createContext: createContext,
  /**
   * @link https://trpc.io/docs/error-handling
   */
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },
  /**
   * Enable query batching
   */
  batching: {
    enabled: true,
  },
  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  // responseMeta() {
  //   // ...
  // },
});
