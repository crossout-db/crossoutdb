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
            .input($Schema.BadgeExchangeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['aggregate'],
            ReturnType<PrismaClient['badgeExchange']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.BadgeExchangeInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['createMany'],
            ReturnType<PrismaClient['badgeExchange']['createMany']>
        >,

        create: procedure
            .input($Schema.BadgeExchangeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['create'],
            ReturnType<PrismaClient['badgeExchange']['create']>
        >,

        deleteMany: procedure
            .input($Schema.BadgeExchangeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['badgeExchange']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.BadgeExchangeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['delete'],
            ReturnType<PrismaClient['badgeExchange']['delete']>
        >,

        findFirst: procedure
            .input($Schema.BadgeExchangeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findFirst'],
            ReturnType<PrismaClient['badgeExchange']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.BadgeExchangeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findFirst'],
            ReturnType<PrismaClient['badgeExchange']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.BadgeExchangeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findMany'],
            ReturnType<PrismaClient['badgeExchange']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.BadgeExchangeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findUnique'],
            ReturnType<PrismaClient['badgeExchange']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.BadgeExchangeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findUnique'],
            ReturnType<PrismaClient['badgeExchange']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.BadgeExchangeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['groupBy'],
            ReturnType<PrismaClient['badgeExchange']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.BadgeExchangeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['updateMany'],
            ReturnType<PrismaClient['badgeExchange']['updateMany']>
        >,

        update: procedure
            .input($Schema.BadgeExchangeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['update'],
            ReturnType<PrismaClient['badgeExchange']['update']>
        >,

        upsert: procedure
            .input($Schema.BadgeExchangeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['upsert'],
            ReturnType<PrismaClient['badgeExchange']['upsert']>
        >,

        count: procedure
            .input($Schema.BadgeExchangeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['count'],
            ReturnType<PrismaClient['badgeExchange']['count']>
        >,
    });
}
