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
            .input($Schema.RarityInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['aggregate'],
            ReturnType<PrismaClient['rarity']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RarityInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['createMany'],
            ReturnType<PrismaClient['rarity']['createMany']>
        >,

        create: procedure
            .input($Schema.RarityInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['create'],
            ReturnType<PrismaClient['rarity']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RarityInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['deleteMany'],
            ReturnType<PrismaClient['rarity']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RarityInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['delete'],
            ReturnType<PrismaClient['rarity']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RarityInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findFirst'],
            ReturnType<PrismaClient['rarity']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RarityInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findFirst'],
            ReturnType<PrismaClient['rarity']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RarityInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findMany'],
            ReturnType<PrismaClient['rarity']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RarityInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findUnique'],
            ReturnType<PrismaClient['rarity']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RarityInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findUnique'],
            ReturnType<PrismaClient['rarity']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RarityInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['groupBy'],
            ReturnType<PrismaClient['rarity']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RarityInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['updateMany'],
            ReturnType<PrismaClient['rarity']['updateMany']>
        >,

        update: procedure
            .input($Schema.RarityInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['update'],
            ReturnType<PrismaClient['rarity']['update']>
        >,

        upsert: procedure
            .input($Schema.RarityInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['upsert'],
            ReturnType<PrismaClient['rarity']['upsert']>
        >,

        count: procedure
            .input($Schema.RarityInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['count'],
            ReturnType<PrismaClient['rarity']['count']>
        >,
    });
}
