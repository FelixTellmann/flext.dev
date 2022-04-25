import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "_server/settings/app-router";
import { createContext } from "_server/settings/context";

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
    console.log(error);
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
  responseMeta({ ctx, paths, type, errors }) {
    // assuming you have all your public routes with the keyword `public` in them
    const github = paths && paths.every((path) => path.includes("fetch.github"));
    // checking that no procedures errored
    const allOk = errors.length === 0;
    // checking we're doing a query request
    const isQuery = type === "query";

    if (ctx?.res && github && allOk && isQuery) {
      // cache request for 1 day + revalidate once every second
      const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
      return {
        headers: {
          "cache-control": `s-maxage=${ONE_DAY_IN_SECONDS}`,
        },
      };
    }
    return {};
  },
});
