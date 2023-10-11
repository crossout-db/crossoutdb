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
            .input($Schema.ExampleInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).example.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['aggregate'],
            ReturnType<PrismaClient['example']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ExampleInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['createMany'],
            ReturnType<PrismaClient['example']['createMany']>
        >,

        create: procedure
            .input($Schema.ExampleInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['create'],
            ReturnType<PrismaClient['example']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ExampleInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['deleteMany'],
            ReturnType<PrismaClient['example']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ExampleInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['delete'],
            ReturnType<PrismaClient['example']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ExampleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).example.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['findFirst'],
            ReturnType<PrismaClient['example']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ExampleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).example.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['findFirst'],
            ReturnType<PrismaClient['example']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ExampleInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).example.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['findMany'],
            ReturnType<PrismaClient['example']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ExampleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).example.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['findUnique'],
            ReturnType<PrismaClient['example']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ExampleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).example.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['findUnique'],
            ReturnType<PrismaClient['example']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ExampleInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).example.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['groupBy'],
            ReturnType<PrismaClient['example']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ExampleInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['updateMany'],
            ReturnType<PrismaClient['example']['updateMany']>
        >,

        update: procedure
            .input($Schema.ExampleInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['update'],
            ReturnType<PrismaClient['example']['update']>
        >,

        upsert: procedure
            .input($Schema.ExampleInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).example.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExampleInputSchema)['upsert'],
            ReturnType<PrismaClient['example']['upsert']>
        >,

        count: procedure
            .input($Schema.ExampleInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).example.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExampleInputSchema)['count'],
            ReturnType<PrismaClient['example']['count']>
        >,
    });
}
