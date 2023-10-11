/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.RecipeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['aggregate'],
            ReturnType<PrismaClient['recipe']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RecipeInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['createMany'],
            ReturnType<PrismaClient['recipe']['createMany']>
        >,

        create: procedure
            .input($Schema.RecipeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['create'],
            ReturnType<PrismaClient['recipe']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RecipeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['recipe']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RecipeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['delete'],
            ReturnType<PrismaClient['recipe']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RecipeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipe']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RecipeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipe']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RecipeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findMany'],
            ReturnType<PrismaClient['recipe']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RecipeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipe']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RecipeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipe']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RecipeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['groupBy'],
            ReturnType<PrismaClient['recipe']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RecipeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['updateMany'],
            ReturnType<PrismaClient['recipe']['updateMany']>
        >,

        update: procedure
            .input($Schema.RecipeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['update'],
            ReturnType<PrismaClient['recipe']['update']>
        >,

        upsert: procedure
            .input($Schema.RecipeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['upsert'],
            ReturnType<PrismaClient['recipe']['upsert']>
        >,

        count: procedure
            .input($Schema.RecipeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['count'],
            ReturnType<PrismaClient['recipe']['count']>
        >,
    });
}
