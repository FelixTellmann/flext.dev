import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { Footer } from "_client/footer";
import { Header } from "_client/layout/header";
import { ContextProviders } from "_client/stores/_contextProviders";
import { LoadInitialData } from "_client/stores/_loadInitialData";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppRouter } from "pages/api/trpc/[trpc]";
import { FC } from "react";
import "styles/animations.scss";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import superjson from "superjson";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  console.log({ session: pageProps.session });

  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={5 * 60} session={pageProps.session}>
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

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/api/trpc`
            : `http://localhost:${process.env.PORT ?? 3000}/api/trpc`,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }

    // for app caching with SSR see https://trpc.io/docs/caching

    return {};
  },
})(App);
