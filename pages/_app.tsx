import { Footer } from "_client/footer";
import { Header } from "_client/layout/header";
import { ContextProviders } from "_client/stores/_contextProviders";
import { LoadInitialData } from "_client/stores/_loadInitialData";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";
import { SessionProvider } from "next-auth/react";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();

  return (
    <SessionProvider refetchInterval={0} session={pageProps.session}>
      <ContextProviders>
        <LoadInitialData>
          <DefaultSeo
            canonical={`${SEO.url}${router.pathname}`}
            description={SEO.description}
            openGraph={SEO.openGraph}
            title={SEO.title}
            twitter={SEO.twitter}
          />
          <Header logo={LAYOUT.logo} nav={LAYOUT.header.nav} />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer logo={LAYOUT.logo} nav={LAYOUT.footer.nav} />
        </LoadInitialData>
      </ContextProviders>
    </SessionProvider>
  );
};

export default App;
