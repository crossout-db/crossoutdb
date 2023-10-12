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
            .input($Schema.MarketInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).market.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['aggregate'],
            ReturnType<PrismaClient['market']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.MarketInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['createMany'],
            ReturnType<PrismaClient['market']['createMany']>
        >,

        create: procedure
            .input($Schema.MarketInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['create'],
            ReturnType<PrismaClient['market']['create']>
        >,

        deleteMany: procedure
            .input($Schema.MarketInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['deleteMany'],
            ReturnType<PrismaClient['market']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.MarketInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['delete'],
            ReturnType<PrismaClient['market']['delete']>
        >,

        findFirst: procedure
            .input($Schema.MarketInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findFirst'],
            ReturnType<PrismaClient['market']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.MarketInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findFirst'],
            ReturnType<PrismaClient['market']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.MarketInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findMany'],
            ReturnType<PrismaClient['market']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.MarketInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findUnique'],
            ReturnType<PrismaClient['market']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.MarketInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findUnique'],
            ReturnType<PrismaClient['market']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.MarketInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).market.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['groupBy'],
            ReturnType<PrismaClient['market']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.MarketInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['updateMany'],
            ReturnType<PrismaClient['market']['updateMany']>
        >,

        update: procedure
            .input($Schema.MarketInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['update'],
            ReturnType<PrismaClient['market']['update']>
        >,

        upsert: procedure
            .input($Schema.MarketInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['upsert'],
            ReturnType<PrismaClient['market']['upsert']>
        >,

        count: procedure
            .input($Schema.MarketInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).market.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['count'],
            ReturnType<PrismaClient['market']['count']>
        >,
    });
}
