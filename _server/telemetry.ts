import { createRouter } from "_server/settings/create-router";
import { z } from "zod";

export const telemetryRouter = createRouter()
  .query("countAll", {
    resolve: ({ ctx: { DB } }) => {
      return DB.$queryRaw`SELECT name, COUNT(*) as count FROM Telemetry GROUP BY name` as Promise<
        { count: number; name: string }[]
      >;
    },
  })
  .mutation("create", {
    input: z.object({ name: z.string() }),
    resolve: ({ ctx: { DB }, input: { name } }) => {
      return DB.telemetry.create({ data: { name } });
    },
  });
