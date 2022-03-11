import { useLoadInitialTelemetry } from "_client/stores/telemetryStore";
import { useSession } from "next-auth/react";
import { FC } from "react";

export const LoadInitialData: FC = ({ children }) => {
  useLoadInitialTelemetry();
  useSession();
  return <>{children}</>;
};
