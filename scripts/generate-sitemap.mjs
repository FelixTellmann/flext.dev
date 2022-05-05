import { writeFileSync } from "fs";
import { globby } from "globby";

async function generate() {
  const pages = await globby([
    "pages/*.tsx",
    "content/blog/**/*.mdx",
    "!content/blog/**/_*.mdx",
    "!pages/_*.tsx",
    "!pages/[*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = ""+
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => { 
        console.log(page)
        const path = page
          .replace("pages", "")
          .replace("content/blog", "posts")
          .replace(".tsx", "")
          .replace(".mdx", "");
        const route = path === "/index" ? "" : path;
        return `
  <url>
    <loc>${`https://flext.dev/`}${route}</loc>
  </url> 
        `;
      })
      .join("")}
</urlset>
    `;

  writeFileSync("public/sitemap.xml", sitemap);
}

generate();
