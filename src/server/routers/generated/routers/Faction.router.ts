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
            .input($Schema.FactionInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['aggregate'],
            ReturnType<PrismaClient['faction']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.FactionInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['createMany'],
            ReturnType<PrismaClient['faction']['createMany']>
        >,

        create: procedure
            .input($Schema.FactionInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['create'],
            ReturnType<PrismaClient['faction']['create']>
        >,

        deleteMany: procedure
            .input($Schema.FactionInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['deleteMany'],
            ReturnType<PrismaClient['faction']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.FactionInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['delete'],
            ReturnType<PrismaClient['faction']['delete']>
        >,

        findFirst: procedure
            .input($Schema.FactionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findFirst'],
            ReturnType<PrismaClient['faction']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.FactionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findFirst'],
            ReturnType<PrismaClient['faction']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.FactionInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findMany'],
            ReturnType<PrismaClient['faction']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.FactionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findUnique'],
            ReturnType<PrismaClient['faction']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.FactionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findUnique'],
            ReturnType<PrismaClient['faction']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.FactionInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['groupBy'],
            ReturnType<PrismaClient['faction']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.FactionInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['updateMany'],
            ReturnType<PrismaClient['faction']['updateMany']>
        >,

        update: procedure
            .input($Schema.FactionInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['update'],
            ReturnType<PrismaClient['faction']['update']>
        >,

        upsert: procedure
            .input($Schema.FactionInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['upsert'],
            ReturnType<PrismaClient['faction']['upsert']>
        >,

        count: procedure
            .input($Schema.FactionInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['count'],
            ReturnType<PrismaClient['faction']['count']>
        >,
    });
}
