import { createTRPCRouter } from "~/server/api/trpc";
import { itemsRouter } from "~/server/api/routers/Item.router";
import { recipesRouter } from "./routers/Recipe.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  item: itemsRouter,
  recipe: recipesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
