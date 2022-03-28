import { NavDesktopUserMenu } from "_client/_layout/nav-desktop-user-menu";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";
import { TelemetryLink } from "_client/telemetryLink";
import { LAYOUT } from "content/layout";
import { SEO } from "content/seo";
import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { NavItemProps } from "./nav-desktop";

type NavDesktopSettingsProps = {
  github: string;
  settings: Omit<NavItemProps, "active">[];
};

export const NavDesktopSettings: FC<NavDesktopSettingsProps> = ({ github, settings }) => {
  return (
    <>
      <nav className="flex h-full items-center gap-1 px-2">
        <ToggleColorThemeButton />
        <TelemetryLink
          className="icon-button"
          href={github}
          name="GitHubLink"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          <BsGithub />
        </TelemetryLink>
        <NavDesktopUserMenu nav={settings} />
      </nav>
    </>
  );
};

export default NavDesktopSettings;
