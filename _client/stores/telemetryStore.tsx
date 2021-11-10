import { useApi } from "_client/hooks/useApi";
import { makeStore } from "_client/stores/_makeStore";
import { useCallback, useEffect } from "react";

const { Provider, useStore } = makeStore<{
  [T: string]: any;
  initialDataLoaded: boolean;
}>(
  {
    initialDataLoaded: false,
  },
  "TelemetryStore"
);

export const useLoadInitialTelemetry = () => {
  const { api } = useApi();

  const [telemetry, setTelemetry] = useStore();

  const loadTelemetry = useCallback(async () => {
    const data = await api("load-telemetry");
    console.log(data);
    setTelemetry(() => ({
      initialDataLoaded: true,
      ...data.reduce((acc, { name, count }) => ({ ...acc, [name]: count }), {}),
    }));
  }, [api, setTelemetry]);

  useEffect(() => {
    if (!telemetry.initialDataLoaded) {
      loadTelemetry();
    }
  }, [loadTelemetry, telemetry.initialDataLoaded]);

  return useStore();
};

export const useTelemetryStore = useStore;
export const TelemetryProvider = Provider;
