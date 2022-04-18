import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { useDarkMode } from "_client/stores/ui-store";
import { useSession } from "next-auth/react";
import { FC, useEffect } from "react";

export const LoadInitialData: FC = ({ children }) => {
  const [isDark, setDarkMode] = useDarkMode();
  useSession();

  useEffect(() => {
    const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(systemIsDark ? "dark" : "light");
    setDarkMode(systemIsDark);
  }, [setDarkMode]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  return <>{children}</>;
};
