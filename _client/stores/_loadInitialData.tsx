import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { useSession } from "next-auth/react";
import { FC, useEffect } from "react";

export const LoadInitialData: FC = ({ children }) => {
  useSession();
  return <>{children}</>;
};
