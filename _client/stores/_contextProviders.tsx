import { UIProvider } from "_client/stores/ui-store";
import { FC } from "react";

export const ContextProviders: FC = ({ children }) => {
  return (
    <>
      <UIProvider>{children}</UIProvider>
    </>
  );
};
