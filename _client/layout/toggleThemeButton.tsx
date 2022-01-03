import { useCallback } from "react";
import { useThemeStore } from "../stores/themeStore";
import { TelemetryButton } from "../telemetryButton";
import { TelemetryLink } from "../telemetryLink";

export const ToggleThemeButton = () => {
  const [{ theme }, setThemeStore] = useThemeStore();

  const handleClick = useCallback(() => {
    setThemeStore(({ theme, ...rest }) => ({
      ...rest,
      theme: theme === "light" ? "dark" : "light",
    }));
  }, [setThemeStore]);

  return (
    <TelemetryButton name="ToggleThemeButton" onClick={handleClick}>
      asd
    </TelemetryButton>
  );
};
