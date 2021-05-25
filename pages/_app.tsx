import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/theme.scss";
import "styles/tailwind.css";

const title = "Felix Tellmann";
const url = "https://Felix Tellmann.com";
const description = "Felix Tellmann | description here";
const site_name = "Felix Tellmann";

export const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  const isAppRoute = /(^\/app\/?$|^\/app\/)/.test(router.asPath);
  const isAuthRoute = /(^\/auth$|^\/auth\/)/.test(router.asPath);

  return (
    <>
      <Head>
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
      </Head>
      <>
        <DefaultSeo
          canonical={`${url}${router.pathname}`}
          description={description}
          openGraph={{
            type: "website",
            locale: "en_IE",
            url,
            site_name,
            title,
            description,
            images: [
              {
                url: "https://www.tellmann.co.za/images/og-default.jpg",
                alt: title,
                width: 1200,
                height: 630,
              },
            ],
          }}
          title={title}
          twitter={{
            handle: "@Tellmann",
            site: "@FelixTellmann",
            cardType: "summary_large_image",
          }}
        />
      </>
      <Component {...pageProps} />
      <style global jsx>{`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 100 900;
          font-display: optional;
          src: url(/fonts/inter-var-latin.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
            U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        html {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
    </>
  );
};

export default App;
