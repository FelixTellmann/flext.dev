import { DarkModeProvider } from "_client/stores/ui-store";
import { FC } from "react";

export const ContextProviders: FC = ({ children }) => {
  return (
    <>
      <DarkModeProvider>{children}</DarkModeProvider>
    </>
  );
};
