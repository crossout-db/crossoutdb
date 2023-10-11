import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { ItemCreateOneSchema } from "../schemas/Item/createOneItem.schema";
import { ItemDeleteOneSchema } from "../schemas/Item/deleteOneItem.schema";
import { ItemFindFirstSchema } from "../schemas/Item/findFirstItem.schema";
import { ItemFindManySchema } from "../schemas/Item/findManyItem.schema";
import { ItemFindUniqueSchema } from "../schemas/Item/findUniqueItem.schema";
import { ItemGroupBySchema } from "../schemas/Item/groupByItem.schema";
import { ItemUpdateManySchema } from "../schemas/Item/updateManyItem.schema";
import { ItemUpdateOneSchema } from "../schemas/Item/updateOneItem.schema";
import { ItemCreateInputObjectSchema } from "../schemas/objects/ItemCreateInput.schema";
import { z } from "zod";

export const itemsRouter = createTRPCRouter({
  // createOne: publicProcedure
  //   .input(ItemCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneItem = await ctx.db.item.create(input);
  //     return createOneItem;
  //   }),
  createOne: protectedProcedure
    .input(ItemCreateInputObjectSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneItem = await ctx.db.item.create({
        data: {
          name: input.name,
          marketDef: input.marketDef,
          quantity: input.quantity,
          level: input.level,
          active: input.active,
          logId: input.logId,
          type: input.type,
          category: input.category,
          faction: input.faction,
          rarity: input.rarity,
        },
      });
      return createOneItem;
    }),
  deleteOne: publicProcedure
    .input(ItemDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneItem = await ctx.db.item.delete(input);
      return deleteOneItem;
    }),
  findFirst: publicProcedure
    .input(ItemFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstItem = await ctx.db.item.findFirst(input);
      return findFirstItem;
    }),
  find: publicProcedure.query(async ({ ctx }) => {
    const findManyItem = await ctx.db.item.findMany();
    return findManyItem;
  }),
  findMany: publicProcedure
    .input(ItemFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyItem = await ctx.db.item.findMany(input);
      return findManyItem;
    }),
  findManyWithRelated: publicProcedure
    .input(ItemFindManySchema)
    .query(async ({ ctx }) => {
      const findManyWithRelatedItem = await ctx.db.item.findMany({
        include: {
          type: true,
          category: true,
          faction: true,
          rarity: true,
          itemStats: true,
          recipes: true,
        },
      });
      return findManyWithRelatedItem;
    }),
  findManyWithMarket: publicProcedure
    .input(ItemFindManySchema)
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
  findCraftable: publicProcedure
    .input(ItemFindManySchema)
    .query(async ({ ctx }) => {
      const findCraftableItem = await ctx.db.item.findMany({
        include: {
          market: {
            orderBy: {
              timestamp: "desc",
            },
            take: 1,
          },
          recipes: true,
        },
      });
      return findCraftableItem;
    }),
  findNonCraftable: publicProcedure
    .input(ItemFindManySchema)
    .query(async ({ ctx }) => {
      const findNonCraftableItem = await ctx.db.item.findMany({
        where: {
          recipes: {
            none: {}, // No related recipes
          },
        },
        include: {
          market: {
            orderBy: {
              timestamp: "desc",
            },
            take: 1,
          },
        },
      });
      return findNonCraftableItem;
    }),
  findUnique: publicProcedure
    .input(ItemFindUniqueSchema)
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
  // groupBy: publicProcedure
  //   .input(ItemGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     const groupByItem = await ctx.db.item.groupBy({
  //       where: input.where,
  //       orderBy: input.orderBy,
  //       by: input.by,
  //       having: input.having,
  //       take: input.take,
  //       skip: input.skip,
  //     });
  //     return groupByItem;
  //   }),
  updateMany: publicProcedure
    .input(ItemUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyItem = await ctx.db.item.updateMany(input);
      return updateManyItem;
    }),
  // updateOne: publicProcedure
  //   .input(ItemUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const updateOneItem = await ctx.db.item.update(input);
  //     return updateOneItem;
  //   }),
});
