import { useLoadInitialTelemetry } from "_client/stores/telemetryStore";
import { useThemeStore } from "_client/stores/themeStore";
import { useSession } from "next-auth/react";
import { FC, useEffect } from "react";

export const LoadInitialData: FC = ({ children }) => {
  const [{ theme }] = useThemeStore();
  useLoadInitialTelemetry();
  useSession();

  useEffect(() => {
    const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(
      theme === "system" ? (systemIsDark ? "dark" : "light") : theme
    );
  }, [theme]);

  return <>{children}</>;
};
