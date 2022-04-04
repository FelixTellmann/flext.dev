import { makeStore } from "_client/stores/_makeStore";
import { Github } from "_server/_types";

const { Provider, useStore } = makeStore<{
  theme: "light" | "dark" | "system";
  github?: Github;
}>(
  {
    theme: "system",
    github: undefined,
  },
  "UI"
);

export const useUI = useStore;
export const UIProvider = Provider;
