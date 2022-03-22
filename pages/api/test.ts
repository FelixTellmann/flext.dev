import { DB } from "_server/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TestData = {
  name?: string;
};

type TestFunction = (req: NextApiRequest, res: NextApiResponse<TestData>) => Promise<void>;

const Test: TestFunction = async (req, res) => {
  try {
    const startTime = Date.now();
    const test = await DB.test.findMany({
      where: {
        title: "felxi2",
      },
    });

    console.log(test, `${Date.now() - startTime}ms`);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ title: "John Doe" });
};

export default Test;
