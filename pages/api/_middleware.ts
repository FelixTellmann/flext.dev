import { redis } from "lib/redis";
import { NextFetchEvent, NextRequest } from "next/server";

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const a = await redis.get("test");
  console.log(a);
  new Response("Hello, world!");
};
