import { useLoadInitialTelemetry } from "_client/stores/telemetryStore";
import { useSession } from "next-auth/react";

export const LoadInitialData = ({ children }) => {
  useLoadInitialTelemetry();
  useSession();
  return <>{children}</>;
};
