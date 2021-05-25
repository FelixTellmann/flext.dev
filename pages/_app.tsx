import { Footer, Header, Page } from "components";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/theme.scss";
import "styles/tailwind.css";

const title = "Felix Tellmann";
const url = "https://flext.dev";
const description = "Felix Tellmann | description here";
const site_name = "Felix Tellmann";
const twitter = {
  handle: "@Tellmann",
  site: "@FelixTellmann",
  cardType: "summary_large_image",
};
const openGraph = {
  type: "website",
  locale: "en_IE",
  url,
  site_name,
  title,
  description,
  images: [
    {
      url: "https://www.flext.dev/images/og-default.jpg",
      alt: title,
      width: 1200,
      height: 630,
    },
  ],
};

const Head = () => {
  const router = useRouter();
  return (
    <>
      <NextHead>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/inter-var-latin.woff2"
          rel="preload"
          type="font/woff2"
        />
        <meta content="strict-origin-when-cross-origin" name="referrer" />
        <meta charSet="UTF-8" />
        <link href="/favicon/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/favicon/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/favicon/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/favicon/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/favicon/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/favicon/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/favicon/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/favicon/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/favicon/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link
          href="/favicon/android-icon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicon/manifest.json" rel="manifest" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </NextHead>

      <DefaultSeo
        canonical={`${url}${router.pathname}`}
        description={description}
        openGraph={openGraph}
        title={title}
        twitter={twitter}
      />
    </>
  );
};

export const App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Head />
      <Header />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </>
  );
};

export default App;
