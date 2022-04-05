import * as trpc from "@trpc/server";
import { fetchRouter } from "_server/fetch";
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
  .middleware(async ({ path, type, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;

    return result;
  })
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge("habits.", habitRouter)
  .merge("telemetry.", telemetryRouter)
  .merge("fetch.", fetchRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
