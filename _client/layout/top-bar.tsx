import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { NavDesktopUserMenu } from "_client/_layout/nav-desktop-user-menu";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { TelemetryLink } from "_client/telemetryLink";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { BsGithub } from "react-icons/bs";

type TopBarProps = {
  logo: ReactNode;
  navDesktop: ReactNode;
  navMobile: ReactNode;
  settingsDesktop: ReactNode;
  version: ReactNode;
};

export const TopBar: FC<TopBarProps> = ({
  logo,
  version,
  navDesktop,
  navMobile,
  settingsDesktop,
}) => {
  return (
    <>
      <header className="sticky top-0 z-50 h-header border-b border-solid border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-bg">
        <div className="mx-auto flex h-full max-w-[1440px] px-2 sm:px-4 md:px-8">
          <div className="flex items-center">{logo}</div>
          <div className="ml-4 flex items-center">{version}</div>
          <div className="ml-auto hidden sm:block">{navDesktop}</div>
          <div className="my-auto hidden h-6 w-px bg-slate-200 dark:bg-gray-700 sm:block" />
          <div className=" hidden sm:block">{settingsDesktop}</div>
          <nav className=" ml-auto sm:hidden">{navMobile}</nav>
        </div>
      </header>
    </>
  );
};
