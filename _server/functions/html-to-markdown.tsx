import { isExternalUrl } from "_client/utils/is-external-url";
import { JSDOM } from "jsdom";
import { NodeHtmlMarkdown } from "node-html-markdown";

export const htmlToMarkdown: (slug: string) => Promise<string> = async (slug) => {
  const origin = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}`;

  const data = await (await fetch(`${origin}/posts/${slug}`)).text();

  const dom = new JSDOM(data);
  const post = dom.window.document.querySelector("article.post");

  if (!post) {
    return NodeHtmlMarkdown.translate(`<div>Not found</div>`);
  }

  post.querySelectorAll(".not-markdown").forEach((node) => {
    node.remove();
  });

  post.querySelectorAll("img").forEach((node) => {
    const imgSrc = node.src;
    if (isExternalUrl(imgSrc)) return;
    node.src = origin + imgSrc;
  });

  const html =
    dom.window.document.querySelector("article.post")?.parentElement?.innerHTML ??
    `<div>Not found</div>`;

  return NodeHtmlMarkdown.translate(html);
};
