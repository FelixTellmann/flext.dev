import { makeStore } from "_client/stores/_makeStore";

const { Provider, useStore } = makeStore<{
  showStats: boolean;
  theme: "light" | "dark";
}>(
  {
    theme: "light",
    showStats: false,
  },
  "ThemeStore"
);

export const useThemeStore = useStore;
export const ThemeProvider = Provider;
