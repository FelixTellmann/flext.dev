import { htmlToMarkdown } from "_server/functions/html-to-markdown";
import { createRouter } from "_server/settings/create-router";
import { z } from "zod";

export const transformRouter = createRouter().mutation("htmlToMarkdown", {
  input: z.string(),
  resolve: async ({ input: html }) => {
    return await htmlToMarkdown(html);
  },
});
