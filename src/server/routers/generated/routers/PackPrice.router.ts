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
            .input($Schema.PackPriceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['aggregate'],
            ReturnType<PrismaClient['packPrice']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PackPriceInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['createMany'],
            ReturnType<PrismaClient['packPrice']['createMany']>
        >,

        create: procedure
            .input($Schema.PackPriceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['create'],
            ReturnType<PrismaClient['packPrice']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PackPriceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['packPrice']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PackPriceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['delete'],
            ReturnType<PrismaClient['packPrice']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PackPriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['packPrice']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PackPriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['packPrice']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PackPriceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['findMany'],
            ReturnType<PrismaClient['packPrice']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PackPriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['packPrice']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PackPriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['packPrice']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PackPriceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['groupBy'],
            ReturnType<PrismaClient['packPrice']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PackPriceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['updateMany'],
            ReturnType<PrismaClient['packPrice']['updateMany']>
        >,

        update: procedure
            .input($Schema.PackPriceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['update'],
            ReturnType<PrismaClient['packPrice']['update']>
        >,

        upsert: procedure
            .input($Schema.PackPriceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packPrice.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['upsert'],
            ReturnType<PrismaClient['packPrice']['upsert']>
        >,

        count: procedure
            .input($Schema.PackPriceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).packPrice.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackPriceInputSchema)['count'],
            ReturnType<PrismaClient['packPrice']['count']>
        >,
    });
}
