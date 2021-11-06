import { redis } from "lib/redis";
import { NextFetchEvent, NextRequest } from "next/server";

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const startTime = Date.now();
  const a = await redis.get("test");
  console.log(a, `${Date.now() - startTime}ms`);

  new Response("Hello, world!");
};
