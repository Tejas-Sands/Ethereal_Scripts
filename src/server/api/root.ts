import { createTRPCRouter } from "~/server/api/trpc";
import { exampleStuff } from "./routers/test";
import { serverRouter } from "./routers/authen";
import { makeBlog } from "./routers/cblog";


export const appRouter = createTRPCRouter({
  exam: exampleStuff,
  auths: serverRouter,
  bcall: makeBlog
});

export type AppRouter = typeof appRouter;
