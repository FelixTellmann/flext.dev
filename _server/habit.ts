import { createRouter } from "_server/settings/create-router";
import { z } from "zod";

export const habitRouter = createRouter()
  .query("findMany", {
    input: z.object({ startsWith: z.string() }),
    resolve: async ({ ctx: { session, DB }, input: { startsWith } }) => {
      if (!session?.user?.email) return null;
      return DB.habits.findMany({
        where: { AND: [{ id: { startsWith } }, { userId: session.user.email }] },
        select: { level: true, id: true },
      });
    },
  })

  .query("findUnique", {
    input: z.object({ id: z.string() }),
    resolve: async ({ ctx: { session, DB }, input: { id } }) => {
      if (!session?.user?.email) return null;

      return DB.habits.findUnique({
        where: { id },
      });
    },
  })

  .mutation("save", {
    input: z.object({ id: z.string(), data: z.string(), level: z.number() }),
    resolve: async ({ ctx: { session, DB }, input: { id, data, level } }) => {
      if (!session?.user?.email) return null;
      return DB.habits.upsert({
        where: { id },
        update: { id, data, level, userId: session.user.email },
        create: { id, data, level, userId: session.user.email },
      });
    },
  });
