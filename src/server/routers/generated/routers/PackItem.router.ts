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
            .input($Schema.PackItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['packItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PackItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['createMany'],
            ReturnType<PrismaClient['packItem']['createMany']>
        >,

        create: procedure
            .input($Schema.PackItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['create'],
            ReturnType<PrismaClient['packItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PackItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['packItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PackItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['delete'],
            ReturnType<PrismaClient['packItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PackItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['packItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PackItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['packItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PackItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findMany'],
            ReturnType<PrismaClient['packItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PackItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['packItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PackItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['packItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PackItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['packItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PackItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['packItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.PackItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['update'],
            ReturnType<PrismaClient['packItem']['update']>
        >,

        upsert: procedure
            .input($Schema.PackItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['upsert'],
            ReturnType<PrismaClient['packItem']['upsert']>
        >,

        count: procedure
            .input($Schema.PackItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['count'],
            ReturnType<PrismaClient['packItem']['count']>
        >,
    });
}
