import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";
import { SEO } from "content/seo";

export const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        canonical={`${SEO.url}${router.pathname}`}
        description={SEO.description}
        openGraph={SEO.openGraph}
        title={SEO.title}
        twitter={SEO.twitter}
      />
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
