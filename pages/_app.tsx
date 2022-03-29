import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { Badge } from "_client/_components/badge";
import NavDesktop from "_client/_layout/nav-desktop";
import NavDesktopSettings from "_client/_layout/nav-desktop-Settings";
import { NavDesktopUserMenu } from "_client/_layout/nav-desktop-user-menu";
import NavMobile from "_client/_layout/nav-mobile";
import { Footer } from "_client/footer";
import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { useIsMount } from "_client/hooks/useIsMount";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { TopBar } from "_client/layout/top-bar";
import { ContextProviders } from "_client/stores/_contextProviders";
import { LoadInitialData } from "_client/stores/_loadInitialData";
import { TelemetryLink } from "_client/telemetryLink";
import { AppRouter } from "_server/settings/app-router";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Logo from "public/logo.svg";
import { FC, useEffect } from "react";
import "styles/animations.scss";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";
import ReactTooltip from "react-tooltip";
import superjson from "superjson";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();
  const isMount = useIsMount();

  const { data: githubData, isSuccess } = useQuery(["fetch.github"], fetchOnce);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [isSuccess]);

  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={5 * 60} session={pageProps.session}>
      <ContextProviders>
        <LoadInitialData>
          <DefaultSeo
            canonical={`${SEO.url}${router.asPath}`}
            description={SEO.description}
            openGraph={SEO.openGraph}
            title={SEO.title}
            twitter={SEO.twitter}
          />

          <TopBar
            logo={
              <TelemetryLink href="/" name="headerLogo">
                <Logo />
              </TelemetryLink>
            }
            navDesktop={<NavDesktop nav={LAYOUT.header.nav} />}
            navMobile={
              <NavMobile
                github={SEO.github}
                githubStars={githubData?.stargazers_count}
                nav={LAYOUT.header.nav}
                settings={LAYOUT.header.profile.nav}
              />
            }
            settingsDesktop={
              <NavDesktopSettings
                github={SEO.github}
                githubStars={githubData?.stargazers_count}
                settings={LAYOUT.header.profile.nav}
              />
            }
            version={<Badge>v{process.env.NEXT_PUBLIC_APP_VERSION}</Badge>}
          />

          <main>
            <Component {...pageProps} />
          </main>

          <Footer logo={LAYOUT.logo} nav={LAYOUT.footer.nav} />
          {!isMount
            ? <ReactTooltip
                html
                backgroundColor="#24292f"
                className="!rounded-md !rounded-[6px] !border-none !py-2 !px-4 !leading-[18px]"
                id="global"
              />
            : null}
        </LoadInitialData>
      </ContextProviders>
    </SessionProvider>
  );
};

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
            : `http://localhost:${process.env.NEXT_PUBLIC_PORT ?? 3000}/api/trpc`,
        }),
      ],
      transformer: superjson,
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
