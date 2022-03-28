import * as trpc from "@trpc/server";
import { Context } from "_server/settings/context";
import superjson from "superjson";
import { habitRouter } from "_server/habit";
import { telemetryRouter } from "_server/telemetry";

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
  .merge("habits.", habitRouter)
  .merge("telemetry.", telemetryRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
