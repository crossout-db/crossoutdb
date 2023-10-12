import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { RecipeItemInputSchema } from 'zenstack/zod/input/RecipeItemInput.schema';

export const recipesRouter = createTRPCRouter({
  findManyWithResult: publicProcedure
    .input(RecipeItemInputSchema.findMany)
    .query(async ({ ctx }) => {
      const findManyWithResultRecipe = await ctx.db.recipe.findMany({
        include: {
          result: {
            include: {
              rarity: {
                select: {
                  order: true,
                },
              },
            },
          },
          ingredients: {
            include: {
              item: {
                include: {
                  market: {
                    orderBy: {
                      timestamp: "desc",
                    },
                    take: 1,
                  },
                },
              },
            },
          },
        },
        orderBy: {
          result: {
            rarity: {
              order: "asc",
            },
          },
        },
      });
      return findManyWithResultRecipe;
    }),
});
