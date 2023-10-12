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
            .input($Schema.LogInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).log.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['aggregate'],
            ReturnType<PrismaClient['log']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.LogInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['createMany'],
            ReturnType<PrismaClient['log']['createMany']>
        >,

        create: procedure
            .input($Schema.LogInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['create'],
            ReturnType<PrismaClient['log']['create']>
        >,

        deleteMany: procedure
            .input($Schema.LogInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['deleteMany'],
            ReturnType<PrismaClient['log']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.LogInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['delete'],
            ReturnType<PrismaClient['log']['delete']>
        >,

        findFirst: procedure
            .input($Schema.LogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findFirst'],
            ReturnType<PrismaClient['log']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.LogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findFirst'],
            ReturnType<PrismaClient['log']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.LogInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findMany'],
            ReturnType<PrismaClient['log']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.LogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findUnique'],
            ReturnType<PrismaClient['log']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.LogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findUnique'],
            ReturnType<PrismaClient['log']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.LogInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).log.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['groupBy'],
            ReturnType<PrismaClient['log']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.LogInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['updateMany'],
            ReturnType<PrismaClient['log']['updateMany']>
        >,

        update: procedure
            .input($Schema.LogInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['update'],
            ReturnType<PrismaClient['log']['update']>
        >,

        upsert: procedure
            .input($Schema.LogInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['upsert'],
            ReturnType<PrismaClient['log']['upsert']>
        >,

        count: procedure
            .input($Schema.LogInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).log.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['count'],
            ReturnType<PrismaClient['log']['count']>
        >,
    });
}
