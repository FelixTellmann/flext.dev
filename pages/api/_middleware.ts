import { NextFetchEvent, NextRequest } from "next/server";

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  new Response("Hello, world!");
};
