import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { exampleStuff } from "./routers/test";
import { serverRouter } from "./routers/authen";
import { makeBlog } from "./routers/cblog";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  exam: exampleStuff,
  auths: serverRouter,
  bcall: makeBlog
});

// export type definition of API
export type AppRouter = typeof appRouter;
