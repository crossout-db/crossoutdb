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
            .input($Schema.PackInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['aggregate'],
            ReturnType<PrismaClient['pack']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PackInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['createMany'],
            ReturnType<PrismaClient['pack']['createMany']>
        >,

        create: procedure
            .input($Schema.PackInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['create'],
            ReturnType<PrismaClient['pack']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PackInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['deleteMany'],
            ReturnType<PrismaClient['pack']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PackInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['delete'],
            ReturnType<PrismaClient['pack']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PackInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findFirst'],
            ReturnType<PrismaClient['pack']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PackInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findFirst'],
            ReturnType<PrismaClient['pack']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PackInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findMany'],
            ReturnType<PrismaClient['pack']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PackInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findUnique'],
            ReturnType<PrismaClient['pack']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PackInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findUnique'],
            ReturnType<PrismaClient['pack']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PackInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['groupBy'],
            ReturnType<PrismaClient['pack']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PackInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['updateMany'],
            ReturnType<PrismaClient['pack']['updateMany']>
        >,

        update: procedure
            .input($Schema.PackInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['update'],
            ReturnType<PrismaClient['pack']['update']>
        >,

        upsert: procedure
            .input($Schema.PackInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['upsert'],
            ReturnType<PrismaClient['pack']['upsert']>
        >,

        count: procedure
            .input($Schema.PackInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['count'],
            ReturnType<PrismaClient['pack']['count']>
        >,
    });
}
