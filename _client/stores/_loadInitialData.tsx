import { useLoadInitialTelemetry } from "_client/stores/telemetryStore";

export const LoadInitialData = ({ children }) => {
  useLoadInitialTelemetry();
  return <>{children}</>;
};
