import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { useUI } from "_client/stores/ui-store";
import { useSession } from "next-auth/react";
import { FC, useEffect } from "react";

export const LoadInitialData: FC = ({ children }) => {
  const [{ theme }, setUI] = useUI();
  useSession();

  const { data: githubData } = useQuery(["fetch.github"], fetchOnce);

  useEffect(() => {
    const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(
      theme === "system" ? (systemIsDark ? "dark" : "light") : theme
    );
  }, [theme]);

  useEffect(() => {
    setUI((current) => ({ ...current, github: githubData }));
  }, [githubData, setUI]);

  return <>{children}</>;
};
