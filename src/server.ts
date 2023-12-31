//npm add express
//npm add -D @types/express

//npm add -D cross-env
//package.json --> "dev": "next dev" veranderen naar "dev: "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts nodemon"
import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express"
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({ req, res }); //for this to work step auth folder and trpc steps need to be completed
export type ExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`Admin URL ${cms.getAdminURL}`);
            },
        },
    });

    app.use("/api/trpc", trpcExpress.createExpressMiddleware({ //for this to work step auth folder and trpc steps need to be completed
        router: appRouter,
        createContext
    }))

    app.use((req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
        payload.logger.info("Next.js started")

        app.listen(PORT, async () => {
            payload.logger.info(`Next.js App url: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
        })
    })
}
start();
