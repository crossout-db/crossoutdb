/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from 'zenstack/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.RecipeItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['recipeItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RecipeItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['createMany'],
            ReturnType<PrismaClient['recipeItem']['createMany']>
        >,

        create: procedure
            .input($Schema.RecipeItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['create'],
            ReturnType<PrismaClient['recipeItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RecipeItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['recipeItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RecipeItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['delete'],
            ReturnType<PrismaClient['recipeItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RecipeItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipeItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RecipeItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipeItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RecipeItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findMany'],
            ReturnType<PrismaClient['recipeItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RecipeItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipeItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RecipeItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipeItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RecipeItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['recipeItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RecipeItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['recipeItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.RecipeItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['update'],
            ReturnType<PrismaClient['recipeItem']['update']>
        >,

        upsert: procedure
            .input($Schema.RecipeItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['upsert'],
            ReturnType<PrismaClient['recipeItem']['upsert']>
        >,

        count: procedure
            .input($Schema.RecipeItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['count'],
            ReturnType<PrismaClient['recipeItem']['count']>
        >,
    });
}
