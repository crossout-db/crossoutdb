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
            .input($Schema.ItemStatsInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['aggregate'],
            ReturnType<PrismaClient['itemStats']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ItemStatsInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['createMany'],
            ReturnType<PrismaClient['itemStats']['createMany']>
        >,

        create: procedure
            .input($Schema.ItemStatsInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['create'],
            ReturnType<PrismaClient['itemStats']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ItemStatsInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['deleteMany'],
            ReturnType<PrismaClient['itemStats']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ItemStatsInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['delete'],
            ReturnType<PrismaClient['itemStats']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ItemStatsInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findFirst'],
            ReturnType<PrismaClient['itemStats']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ItemStatsInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findFirst'],
            ReturnType<PrismaClient['itemStats']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ItemStatsInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findMany'],
            ReturnType<PrismaClient['itemStats']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ItemStatsInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findUnique'],
            ReturnType<PrismaClient['itemStats']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ItemStatsInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findUnique'],
            ReturnType<PrismaClient['itemStats']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ItemStatsInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['groupBy'],
            ReturnType<PrismaClient['itemStats']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ItemStatsInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['updateMany'],
            ReturnType<PrismaClient['itemStats']['updateMany']>
        >,

        update: procedure
            .input($Schema.ItemStatsInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['update'],
            ReturnType<PrismaClient['itemStats']['update']>
        >,

        upsert: procedure
            .input($Schema.ItemStatsInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['upsert'],
            ReturnType<PrismaClient['itemStats']['upsert']>
        >,

        count: procedure
            .input($Schema.ItemStatsInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['count'],
            ReturnType<PrismaClient['itemStats']['count']>
        >,
    });
}
