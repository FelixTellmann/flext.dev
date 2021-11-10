import { IdProvider } from "@radix-ui/react-id";
import { TelemetryProvider } from "_client/stores/telemetryStore";

export const ContextProviders = ({ children }) => {
  return (
    <>
      <TelemetryProvider>
        <IdProvider>{children}</IdProvider>
      </TelemetryProvider>
    </>
  );
};
