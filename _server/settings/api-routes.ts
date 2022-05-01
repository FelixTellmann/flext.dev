import * as trpc from "@trpc/server";
import { fetchRouter } from "_server/fetch";
import { postRouter } from "_server/posts";
import { Context } from "_server/settings/context";
import { transformRouter } from "_server/transform";
import superjson from "superjson";
import { habitRouter } from "_server/habit";
import { telemetryRouter } from "_server/telemetry";
import { z } from "zod";

export const apiRoutes = trpc
  .router<Context>()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
  .middleware(async ({ path, type, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;
    console.log(path);

    return result;
  })

  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge("posts.", postRouter)
  .merge("habits.", habitRouter)
  .merge("telemetry.", telemetryRouter)
  .merge("fetch.", fetchRouter)
  .merge("transform.", transformRouter);

// export type definition of API
export type AppRouter = typeof apiRoutes;
