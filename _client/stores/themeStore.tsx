import { makeStore } from "_client/stores/_makeStore";
import { Github } from "_server/_types";

const { Provider, useStore } = makeStore<{
  showStats: boolean;
  theme: "light" | "dark" | "system";
  github?: Github;
}>(
  {
    theme: "system",
    showStats: false,
    github: undefined,
  },
  "ThemeStore"
);

export const useThemeStore = useStore;
export const ThemeProvider = Provider;
