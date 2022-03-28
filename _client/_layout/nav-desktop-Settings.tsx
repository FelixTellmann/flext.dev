import { GithubLink } from "_client/_layout/github-link";
import { NavDesktopUserMenu } from "_client/_layout/nav-desktop-user-menu";
import { ToggleColorThemeButton } from "_client/layout/toggle-color-theme-button";

import { FC } from "react";

import { NavItemProps } from "./nav-desktop";

type NavDesktopSettingsProps = {
  github: string;
  settings: Omit<NavItemProps, "active">[];
  githubStars?: number;
};

export const NavDesktopSettings: FC<NavDesktopSettingsProps> = ({
  github,
  settings,
  githubStars,
}) => {
  return (
    <>
      <nav className="flex h-full items-center gap-1 px-2">
        <ToggleColorThemeButton />
        <GithubLink githubStars={githubStars} href={github} />
        <NavDesktopUserMenu nav={settings} />
      </nav>
    </>
  );
};

export default NavDesktopSettings;
