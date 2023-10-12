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
            .input($Schema.ReleaseInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).release.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['aggregate'],
            ReturnType<PrismaClient['release']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ReleaseInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['createMany'],
            ReturnType<PrismaClient['release']['createMany']>
        >,

        create: procedure
            .input($Schema.ReleaseInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['create'],
            ReturnType<PrismaClient['release']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ReleaseInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['deleteMany'],
            ReturnType<PrismaClient['release']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ReleaseInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['delete'],
            ReturnType<PrismaClient['release']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ReleaseInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findFirst'],
            ReturnType<PrismaClient['release']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ReleaseInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findFirst'],
            ReturnType<PrismaClient['release']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ReleaseInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findMany'],
            ReturnType<PrismaClient['release']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ReleaseInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findUnique'],
            ReturnType<PrismaClient['release']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ReleaseInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findUnique'],
            ReturnType<PrismaClient['release']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ReleaseInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).release.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['groupBy'],
            ReturnType<PrismaClient['release']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ReleaseInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['updateMany'],
            ReturnType<PrismaClient['release']['updateMany']>
        >,

        update: procedure
            .input($Schema.ReleaseInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['update'],
            ReturnType<PrismaClient['release']['update']>
        >,

        upsert: procedure
            .input($Schema.ReleaseInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['upsert'],
            ReturnType<PrismaClient['release']['upsert']>
        >,

        count: procedure
            .input($Schema.ReleaseInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).release.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['count'],
            ReturnType<PrismaClient['release']['count']>
        >,
    });
}
