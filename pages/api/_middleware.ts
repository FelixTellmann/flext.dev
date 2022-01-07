// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextFetchEvent, NextRequest } from "next/server";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const startTime = Date.now();

  console.log(`${Date.now() - startTime}ms`);

  new Response("Hello, world!");
};

export default middleware;
