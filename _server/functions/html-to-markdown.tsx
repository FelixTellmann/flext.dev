import { NodeHtmlMarkdown } from "node-html-markdown";

export const htmlToMarkdown: (html: string) => Promise<string> = async (html) => {
  return NodeHtmlMarkdown.translate(html);
};
