// utils/trpc.ts
import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "pages/api/trpc/[trpc]";

export const API = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
