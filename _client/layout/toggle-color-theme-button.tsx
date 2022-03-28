import useColorTheme from "_client/useColorTheme";

import { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoDesktopOutline } from "react-icons/io5";
import { TelemetryButton } from "../telemetryButton";

export const ToggleColorThemeButton: FC = () => {
  const { colorTheme, toggleColorTheme } = useColorTheme();

  return (
    <TelemetryButton className="icon-button" name="ToggleThemeButton" onClick={toggleColorTheme}>
      {{ dark: <FiMoon />, light: <FiSun />, system: <IoDesktopOutline /> }[colorTheme]}
    </TelemetryButton>
  );
};
