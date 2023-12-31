import {createTRPCReact} from "@trpc/react-query"
import { AppRouter } from ".";

export const trpc = createTRPCReact<AppRouter>({}); //create index.ts and trpc.ts //type AppRouter contains the whole back-end
