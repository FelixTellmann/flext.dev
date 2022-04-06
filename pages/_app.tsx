import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { Footer } from "_client/layout/footer";
import { Header } from "_client/layout/header";

import { useIsMount } from "_client/hooks/useIsMount";
import { ContextProviders } from "_client/stores/_contextProviders";
import { LoadInitialData } from "_client/stores/_loadInitialData";
import { useUI } from "_client/stores/ui-store";
import { AppRouter } from "_server/settings/app-router";
import { SEO } from "content/seo";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "styles/animations.scss";
import "styles/prism.scss";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import superjson from "superjson";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  const isMount = useIsMount();
  const [{ github }] = useUI();

  useEffect(() => {
    if (github) {
      ReactTooltip.rebuild();
    }
  }, [github]);

  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={5 * 60} session={pageProps.session}>
      <ContextProviders>
        <LoadInitialData>
          {/^\/examples\//i.test(router.pathname)
            ? <Component {...pageProps} />
            : <>
                <DefaultSeo
                  canonical={`${SEO.url}${router.asPath}`}
                  description={SEO.description}
                  openGraph={SEO.openGraph}
                  title={SEO.title}
                  twitter={SEO.twitter}
                />
                <Header />
                <main className="min-h-[calc(100vh-300px)]">
                  <Component {...pageProps} />
                </main>

                <Footer />
                {!isMount
                  ? <ReactTooltip
                      html
                      backgroundColor="#24292f"
                      className="!rounded-md !rounded-[6px] !border-none !py-2 !px-4 !leading-[18px]"
                      id="global"
                    />
                  : null}
              </>}
        </LoadInitialData>
      </ContextProviders>
    </SessionProvider>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      // during client requests
      return {
        url: "/api/trpc",
      };
    }

    return {
      url: process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
        : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
      links: [
        /*loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),*/
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
            : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
        }),
      ],
      transformer: superjson,
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: true,
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    return {};
  },
})(App);
