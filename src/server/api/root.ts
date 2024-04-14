import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { exampleStuff } from "./routers/test";
import { serverRouter } from "./routers/authen";
import { makeBlog } from "./routers/cblog";
import { comment } from "./routers/comment";

export const appRouter = createTRPCRouter({
  post: postRouter,
  exam: exampleStuff,
  auths: serverRouter,
  bcall: makeBlog
});

export type AppRouter = typeof appRouter;
