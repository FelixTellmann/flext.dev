import { DB } from "_server/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TestFunction = (
  req: NextApiRequest & { topic: string },
  res: NextApiResponse
) => Promise<void>;

const Test: TestFunction = async (req, res) => {
  const { topic, ...body } = req.body;

  switch (topic) {
    case "load-telemetry": {
      const data: { count: number; name: string }[] =
        await DB.$queryRaw`SELECT name, COUNT(*) as count FROM Telemetry GROUP BY name`;
      res.status(200).json(data);
      break;
    }
    case "telemetry": {
      const data = await DB.telemetry.create({ data: { name: body.name } });
      res.status(200).json(data);
      break;
    }
    default: {
      res.status(200).json({});
    }
  }
};

export default Test;
