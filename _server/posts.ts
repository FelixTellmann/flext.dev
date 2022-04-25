import { createRouter } from "_server/settings/create-router";
import { z } from "zod";

export const postRouter = createRouter()
  .query("getAll", {
    resolve: async ({ ctx: { DB } }) => {
      return DB.post.findMany();
    },
  })
  .mutation("addView", {
    input: z.object({ id: z.string() }),
    resolve: async ({ ctx: { DB }, input: { id } }) => {
      console.log({ id });
      return DB.post.upsert({
        where: { id },
        update: { id, views: { increment: 1 } },
        create: { id, views: 1 },
      });
    },
  })
  .mutation("addLike", {
    input: z.object({ id: z.string() }),
    resolve: async ({ ctx: { DB }, input: { id } }) => {
      return DB.post.upsert({
        where: { id },
        update: { id, likes: { increment: 1 } },
        create: { id, likes: 1 },
      });
    },
  });
/*.mutation("addComment", {
    input: z.object({ id: z.string() }),
    resolve: async ({ ctx: { DB }, input: { id } }) => {
      return DB.post.upsert({
        where: { id },
        update: { id, likes: { increment: 1 } },
        create: { id },
      });
    },
  })*/
