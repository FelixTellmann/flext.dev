import * as trpc from "@trpc/server";
import { habitRouter } from "_server/habit";
import { Context } from "_server/settings/context";
import superjson from "superjson";

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
  .merge("habits.", habitRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
