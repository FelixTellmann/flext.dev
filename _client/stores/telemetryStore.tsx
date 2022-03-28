import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { makeStore } from "_client/stores/_makeStore";
import { useEffect } from "react";

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
  const [telemetry, setTelemetry] = useStore();
  const { data, isSuccess } = useQuery(["telemetry.countAll"], fetchOnce);

  useEffect(() => {
    if (isSuccess) {
      setTelemetry((current) => {
        if (current.initialDataLoaded) return current;
        return {
          initialDataLoaded: true,
          ...data.reduce((acc, { name, count }) => ({ ...acc, [name]: count }), {}),
        };
      });
    }
  }, [data, isSuccess, setTelemetry]);

  return useStore();
};

export const useTelemetryStore = useStore;
export const TelemetryProvider = Provider;
