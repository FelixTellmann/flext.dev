import { useThemeStore } from "_client/stores/themeStore";
import { useCallback, useEffect, useRef, useState } from "react";

export const useColorTheme = () => {
  const [{ theme }, setThemeStore] = useThemeStore();

  const toggleColorTheme = useCallback(() => {
    setThemeStore((current) => ({
      ...current,
      theme: current.theme === "dark" ? "system" : current.theme === "light" ? "dark" : "light",
    }));
  }, [setThemeStore]);

  const setColorTheme = useCallback((colorTheme: "light" | "dark" | "system") => {
    setThemeStore((current) => ({
      ...current,
      theme: colorTheme,
    }));
  }, [setThemeStore]);

  return { colorTheme: theme, toggleColorTheme, setColorTheme };
};

export default useColorTheme;
