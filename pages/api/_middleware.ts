import prisma from "lib/prisma";
import { NextFetchEvent, NextRequest } from "next/server";

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const startTime = Date.now();
  try {
    const test = await prisma.test.create({
      data: {
        name: "felxi2",
      },
    });

    console.log(test, `${Date.now() - startTime}ms`);
  } catch (err) {
    console.log(err.message);
  }
  new Response("Hello, world!");
};
