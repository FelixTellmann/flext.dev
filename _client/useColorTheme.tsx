import { useUI } from "_client/stores/ui-store";
import { useCallback } from "react";

export const useColorTheme = () => {
  const [{ theme }, setUI] = useUI();

  const toggleColorTheme = useCallback(() => {
    setUI((UI) => ({
      ...UI,
      theme: UI.theme === "dark" ? "light" : UI.theme === "light" ? "dark" : "light",
    }));
  }, [setUI]);

  const setColorTheme = useCallback((colorTheme: "light" | "dark" | "system") => {
    setUI((current) => ({
      ...current,
      theme: colorTheme,
    }));
  }, [setUI]);

  return { colorTheme: theme, toggleColorTheme, setColorTheme };
};

export default useColorTheme;
