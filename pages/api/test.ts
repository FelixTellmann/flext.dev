import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TestData = {
  name?: string;
};

type TestFunction = (req: NextApiRequest, res: NextApiResponse<TestData>) => Promise<void>;

export const Test: TestFunction = async (req, res) => {
  console.log("hi");
  res.status(200).json({ name: "John Doe" });
};

export default Test;
