import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { itemsRouter } from "~/server/api/routers/Item.router";
import { marketsRouter } from "~/server/api/routers/Market.router";
import { recipesRouter } from "./routers/Recipe.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  item: itemsRouter,
  recipe: recipesRouter,
  market: marketsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
