import { SQL } from "lib/_api";
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TestData = {
  name?: string;
};

export const getUser = SQL({
  table: `user`,
  operation: "SELECT",
});

type TestFunction = (req: NextApiRequest, res: NextApiResponse<TestData>) => Promise<void>;

export const Test: TestFunction = async (req, res) => {
  try {
    const startTime = Date.now();
    const test = await prisma.test.create({
      data: {
        name: "felxi2",
      },
    });

    console.log(test, `${Date.now() - startTime}ms`);
  } catch (err) {
    console.log(err.message);
  }

  try {
    const startTime = Date.now();
    const a = await getUser({});
    console.log({ a }, `${Date.now() - startTime}ms`);
  } catch (err) {
    console.log(err.message);
  }
  res.status(200).json({ name: "John Doe" });
};

export default Test;
