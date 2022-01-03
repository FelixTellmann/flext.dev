import { IdProvider } from "@radix-ui/react-id";
import { TelemetryProvider } from "_client/stores/telemetryStore";
import { ThemeProvider } from "_client/stores/themeStore";

export const ContextProviders = ({ children }) => {
  return (
    <>
      <TelemetryProvider>
        <ThemeProvider>
          <IdProvider>{children}</IdProvider>
        </ThemeProvider>
      </TelemetryProvider>
    </>
  );
};
