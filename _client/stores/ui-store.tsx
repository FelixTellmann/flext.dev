import { makeStore } from "_client/stores/_makeStore";

const { Provider, useStore } = makeStore<boolean>(false, "UI");

export const useDarkMode = useStore;
export const DarkModeProvider = Provider;
