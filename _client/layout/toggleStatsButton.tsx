import { useCallback } from "react";
import { useThemeStore } from "../stores/themeStore";
import { TelemetryButton } from "../telemetryButton";

export const ToggleStatsButton = () => {
  const [{ showStats }, setThemeStore] = useThemeStore();

  const handleClick = useCallback(() => {
    setThemeStore(({ showStats, ...rest }) => ({
      ...rest,
      showStats: !showStats,
    }));
  }, [setThemeStore]);

  return (
    <TelemetryButton name="ToggleTelemetryButton" onClick={handleClick}>
      asd
    </TelemetryButton>
  );
};
