import { makeStore } from "_client/stores/_makeStore";

const { Provider, useStore } = makeStore<{
  showStats: boolean;
  theme: "light" | "dark" | "system";
}>(
  {
    theme: "system",
    showStats: false,
  },
  "ThemeStore"
);

export const useThemeStore = useStore;
export const ThemeProvider = Provider;
