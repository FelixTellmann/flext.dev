import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import core from "puppeteer-core";

type ScreenshotFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

let _page: core.Page | null;

async function getPage() {
  if (_page) {
    return _page;
  }

  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  _page = await browser.newPage();
  return _page;
}

export const Screenshot: ScreenshotFunction = async (req, res) => {
  /*  const data = await fetch(`${process.env.NEXTAUTH_URL}/seo/og-image?bg=dots`);
  const html = await data.text();

  console.log(html);*/
  const page = await getPage();
  await page.goto(`${process.env.NEXTAUTH_URL}/seo/og-image?bg=dots`);
  await page.setViewport({ width: 2048, height: 1170 });
  /*  await page.setContent(html);*/
  const file = await page.screenshot({ type: "jpeg" });

  res.setHeader("Content-Type", `image/jpeg`);
  res.setHeader("Content-Disposition", `filename="flext.dev-og-image.jpg"`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.end(file);
};

export default Screenshot;
