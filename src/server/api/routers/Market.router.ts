import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { MarketCreateOneSchema } from "../schemas/Market/createOneMarket.schema";
import { MarketDeleteOneSchema } from "../schemas/Market/deleteOneMarket.schema";
import { MarketFindFirstSchema } from "../schemas/Market/findFirstMarket.schema";
import { MarketFindManySchema } from "../schemas/Market/findManyMarket.schema";
import { MarketFindUniqueSchema } from "../schemas/Market/findUniqueMarket.schema";
import { MarketGroupBySchema } from "../schemas/Market/groupByMarket.schema";
import { MarketUpdateManySchema } from "../schemas/Market/updateManyMarket.schema";
import { MarketUpdateOneSchema } from "../schemas/Market/updateOneMarket.schema";

export const marketsRouter = createTRPCRouter({
  // createOne: publicProcedure
  //   .input(MarketCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneMarket = await ctx.db.market.create(input);
  //     return createOneMarket;
  //   }),
  deleteOne: publicProcedure
    .input(MarketDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneMarket = await ctx.db.market.delete(input);
      return deleteOneMarket;
    }),
  findFirst: publicProcedure
    .input(MarketFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMarket = await ctx.db.market.findFirst(input);
      return findFirstMarket;
    }),
  findMany: publicProcedure
    .input(MarketFindManySchema).query(async ({ ctx, input }) => {
      const findManyMarket = await ctx.db.market.findMany(input);
      return findManyMarket;
    }),
  findUnique: publicProcedure
    .input(MarketFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMarket = await ctx.db.market.findUnique(input);
      return findUniqueMarket;
    }),
  groupBy: publicProcedure
    .input(MarketGroupBySchema).query(async ({ ctx, input }) => {
      const groupByMarket = await ctx.db.market.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMarket;
    }),
  updateMany: publicProcedure
    .input(MarketUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyMarket = await ctx.db.market.updateMany(input);
      return updateManyMarket;
    }),
  // updateOne: publicProcedure
  //   .input(MarketUpdateOneSchema).mutation(async ({ ctx, input }) => {
  //     const updateOneMarket = await ctx.db.market.update(input);
  //     return updateOneMarket;
  //   }),

}) 
