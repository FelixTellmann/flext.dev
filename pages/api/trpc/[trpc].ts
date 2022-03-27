import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { DB } from "_server/prisma";
import { getSession } from "next-auth/react";
import superjson from "superjson";
import { z } from "zod";
import { Session } from "next-auth";

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
  })
  .query("habits.findMany", {
    input: z.object({ startsWith: z.string() }),
    resolve: async ({ ctx: { session }, input: { startsWith } }) => {
      if (!session?.user?.email) return null;
      return DB.habits.findMany({
        where: { AND: [{ id: { startsWith } }, { userId: session.user.email }] },
        select: { level: true, id: true },
      });
    },
  })
  .query("habits.findUnique", {
    input: z.object({ id: z.string() }),
    resolve: async ({ ctx: { session }, input: { id } }) => {
      if (!session?.user?.email) return null;

      return DB.habits.findUnique({
        where: { id },
      });
    },
  })
  .mutation("habits.save", {
    input: z.object({ id: z.string(), data: z.string(), level: z.number() }),
    resolve: async ({ ctx: { session }, input: { id, data, level } }) => {
      if (!session?.user?.email) return null;
      return DB.habits.upsert({
        where: { id },
        update: { id, data, level, userId: session.user.email },
        create: { id, data, level, userId: session.user.email },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  session: Session | null;
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */

export const createContext = async ({ req, res }: trpcNext.CreateNextContextOptions) => {
  const session = await getSession({ req });
  console.log("createContext for", session?.user?.name ?? "unknown user");
  return {
    req,
    res,
    DB,
    session,
  };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
  return trpc.router<Context>();
}

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
