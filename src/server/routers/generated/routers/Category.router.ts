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
            .input($Schema.CategoryInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).category.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['aggregate'],
            ReturnType<PrismaClient['category']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.CategoryInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['createMany'],
            ReturnType<PrismaClient['category']['createMany']>
        >,

        create: procedure
            .input($Schema.CategoryInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['create'],
            ReturnType<PrismaClient['category']['create']>
        >,

        deleteMany: procedure
            .input($Schema.CategoryInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['deleteMany'],
            ReturnType<PrismaClient['category']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.CategoryInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['delete'],
            ReturnType<PrismaClient['category']['delete']>
        >,

        findFirst: procedure
            .input($Schema.CategoryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findFirst'],
            ReturnType<PrismaClient['category']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.CategoryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findFirst'],
            ReturnType<PrismaClient['category']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.CategoryInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findMany'],
            ReturnType<PrismaClient['category']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.CategoryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findUnique'],
            ReturnType<PrismaClient['category']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.CategoryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findUnique'],
            ReturnType<PrismaClient['category']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.CategoryInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).category.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['groupBy'],
            ReturnType<PrismaClient['category']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.CategoryInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['updateMany'],
            ReturnType<PrismaClient['category']['updateMany']>
        >,

        update: procedure
            .input($Schema.CategoryInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['update'],
            ReturnType<PrismaClient['category']['update']>
        >,

        upsert: procedure
            .input($Schema.CategoryInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['upsert'],
            ReturnType<PrismaClient['category']['upsert']>
        >,

        count: procedure
            .input($Schema.CategoryInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).category.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['count'],
            ReturnType<PrismaClient['category']['count']>
        >,
    });
}
