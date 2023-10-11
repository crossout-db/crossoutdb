import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { UserCreateOneSchema } from "../schemas/User/createOneUser.schema";
// import { UserDeleteOneSchema } from "../schemas/User/deleteOneUser.schema";
// import { UserFindFirstSchema } from "../schemas/User/findFirstUser.schema";
// import { UserFindManySchema } from "../schemas/User/findManyUser.schema";
import { UserFindUniqueSchema } from "../schemas/User/findUniqueUser.schema";
// import { UserGroupBySchema } from "../schemas/User/groupByUser.schema";
import { UserUpdateOneSchema } from "../schemas/User/updateOneUser.schema";
import { UserUpdateInputObjectSchema } from "../schemas/objects/UserUpdateInput.schema";

export const usersRouter = createTRPCRouter({
  // createOne: publicProcedure
  //   .input(UserCreateOneSchema).mutation(async ({ ctx, input }) => {
  //     const createOneUser = await ctx.db.user.create(input);
  //     return createOneUser;
  //   }),
  // deleteOne: publicProcedure
  //   .input(UserDeleteOneSchema).mutation(async ({ ctx, input }) => {
  //     const deleteOneUser = await ctx.db.user.delete(input);
  //     return deleteOneUser;
  //   }),
  // findFirst: publicProcedure
  //   .input(UserFindFirstSchema).query(async ({ ctx, input }) => {
  //     const findFirstUser = await ctx.db.user.findFirst(input);
  //     return findFirstUser;
  //   }),
  // findMany: publicProcedure
  //   .input(UserFindManySchema).query(async ({ ctx, input }) => {
  //     const findManyUser = await ctx.db.user.findMany(input);
  //     return findManyUser;
  //   }),
  findUnique: publicProcedure
    .input(UserFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueUser = await ctx.db.user.findUnique(input);
      return findUniqueUser;
    }),
  // groupBy: publicProcedure
  //   .input(UserGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByUser = await ctx.db.user.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
  //     return groupByUser;
  //   }),
  updateOne: publicProcedure
    .input(UserUpdateInputObjectSchema).mutation(async ({ ctx, input }) => {
      const updateOneUser = await ctx.db.user.update({
        where: {
          id: input.id?.toString(),
        },
        data: {
          name: input.name,
          email: input.email,
          role: input.role,
        }
      });
      return updateOneUser;
    }),

}) 
