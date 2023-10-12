import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { ItemInputSchema } from 'zenstack/zod/input/ItemInput.schema';

export const itemsRouter = createTRPCRouter({
  findManyWithMarket: publicProcedure
    .input(ItemInputSchema.findMany)
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
    .input(ItemInputSchema.findUnique)
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
                  item: true,
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
                      item: true,
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
