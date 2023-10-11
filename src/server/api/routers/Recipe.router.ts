import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { RecipeCreateOneSchema } from "../schemas/Recipe/createOneRecipe.schema";
import { RecipeDeleteOneSchema } from "../schemas/Recipe/deleteOneRecipe.schema";
import { RecipeFindFirstSchema } from "../schemas/Recipe/findFirstRecipe.schema";
import { RecipeFindManySchema } from "../schemas/Recipe/findManyRecipe.schema";
import { RecipeFindUniqueSchema } from "../schemas/Recipe/findUniqueRecipe.schema";
import { RecipeGroupBySchema } from "../schemas/Recipe/groupByRecipe.schema";
import { RecipeUpdateManySchema } from "../schemas/Recipe/updateManyRecipe.schema";
import { RecipeUpdateOneSchema } from "../schemas/Recipe/updateOneRecipe.schema";

export const recipesRouter = createTRPCRouter({
  // createOne: publicProcedure
  //   .input(RecipeCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneRecipe = await ctx.db.recipe.create(input);
  //     return createOneRecipe;
  //   }),
  deleteOne: publicProcedure
    .input(RecipeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneRecipe = await ctx.db.recipe.delete(input);
      return deleteOneRecipe;
    }),
  findFirst: publicProcedure
    .input(RecipeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstRecipe = await ctx.db.recipe.findFirst(input);
      return findFirstRecipe;
    }),
  findMany: publicProcedure
    .input(RecipeFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyRecipe = await ctx.db.recipe.findMany(input);
      return findManyRecipe;
    }),
  findManyWithResult: publicProcedure
    .input(RecipeFindManySchema)
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
  findUnique: publicProcedure
    .input(RecipeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueRecipe = await ctx.db.recipe.findUnique(input);
      return findUniqueRecipe;
    }),
  // groupBy: publicProcedure
  //   .input(RecipeGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByRecipe = await ctx.db.recipe.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return groupByRecipe;
  //   }),
  updateMany: publicProcedure
    .input(RecipeUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyRecipe = await ctx.db.recipe.updateMany(input);
      return updateManyRecipe;
    }),
  // updateOne: publicProcedure
  //   .input(RecipeUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const updateOneRecipe = await ctx.db.recipe.update(input);
  //     return updateOneRecipe;
  //   }),
});
