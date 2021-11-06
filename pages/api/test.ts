import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TestData = {
  name?: string;
};

type TestFunction = (req: NextApiRequest, res: NextApiResponse<TestData>) => Promise<void>;

export const Test: TestFunction = async (req, res) => {
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
  res.status(200).json({ name: "John Doe" });
};

export default Test;
