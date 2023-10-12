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
            .input($Schema.ItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).item.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['item']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['createMany'],
            ReturnType<PrismaClient['item']['createMany']>
        >,

        create: procedure
            .input($Schema.ItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['create'],
            ReturnType<PrismaClient['item']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['item']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['delete'],
            ReturnType<PrismaClient['item']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['item']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['item']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findMany'],
            ReturnType<PrismaClient['item']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['item']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['item']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).item.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['item']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['item']['updateMany']>
        >,

        update: procedure
            .input($Schema.ItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['update'],
            ReturnType<PrismaClient['item']['update']>
        >,

        upsert: procedure
            .input($Schema.ItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['upsert'],
            ReturnType<PrismaClient['item']['upsert']>
        >,

        count: procedure
            .input($Schema.ItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).item.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['count'],
            ReturnType<PrismaClient['item']['count']>
        >,
    });
}
