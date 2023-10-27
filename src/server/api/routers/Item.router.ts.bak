import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import $Schema from '@zenstackhq/runtime/zod/input';

const createRecipeTree = (depth: number): object | boolean => {
  if (depth <= 0)
    return true;

  return {
    include: {
      recipes: {
        include: {
          ingredients: {
            include: {
              item: createRecipeTree(depth - 1),
            },
          },
        },
      },
    },
  };
}

export const itemsRouter = createTRPCRouter({
  findMany: publicProcedure
    .query(async ({ ctx }) => {
      const findManyItem = await ctx.db.item.findMany();
      return findManyItem;
    }),
  findManyWithMarket: publicProcedure
    .input($Schema.ItemInputSchema.findMany)
    .query(async ({ ctx }) => {
      const findManyWithMarketItem = await ctx.db.item.findMany({
        include: {
          type: true,
          category: true,
          faction: true,
          rarity: true,
          market: {
            orderBy: {
              timestamp: "desc",
            },
            take: 1,
          },
        },
      });
      return findManyWithMarketItem;
    }),
  findUnique: publicProcedure
    .input($Schema.ItemInputSchema.findUnique)
    .query(async ({ ctx, input }) => {
      const findUniqueItem = await ctx.db.item.findUnique({
        where: { id: input.where.id },
        include: {
          type: true,
          category: true,
          faction: true,
          rarity: true,
          itemStats: {
            orderBy: {
              timestamp: "desc",
            },
            take: 1,
            include: {
              user: {
                select: {
                  name: true,
                },
              },
              release: true,
            },
          },
          recipes: {
            include: {
              ingredients: {
                include: {
                  item: createRecipeTree(3),
                },
              },
            },
          },
          market: {
            orderBy: {
              timestamp: "desc",
            },
            take: 1,
          },
          itemSynergies: {
            include: {
              synergy: {
                include: {
                  synergyItems: {
                    include: {
                      item: {
                        include: {
                          rarity: true,
                          category: true,
                        }
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return findUniqueItem;
    }),
});
