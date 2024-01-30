import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => "hello"),
});

export type AppRouter = typeof appRouter;
