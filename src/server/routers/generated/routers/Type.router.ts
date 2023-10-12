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
            .input($Schema.TypeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).type.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['aggregate'],
            ReturnType<PrismaClient['type']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.TypeInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['createMany'],
            ReturnType<PrismaClient['type']['createMany']>
        >,

        create: procedure
            .input($Schema.TypeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['create'],
            ReturnType<PrismaClient['type']['create']>
        >,

        deleteMany: procedure
            .input($Schema.TypeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['type']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.TypeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['delete'],
            ReturnType<PrismaClient['type']['delete']>
        >,

        findFirst: procedure
            .input($Schema.TypeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findFirst'],
            ReturnType<PrismaClient['type']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.TypeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findFirst'],
            ReturnType<PrismaClient['type']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.TypeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findMany'],
            ReturnType<PrismaClient['type']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.TypeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findUnique'],
            ReturnType<PrismaClient['type']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.TypeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findUnique'],
            ReturnType<PrismaClient['type']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.TypeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).type.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['groupBy'],
            ReturnType<PrismaClient['type']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.TypeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['updateMany'],
            ReturnType<PrismaClient['type']['updateMany']>
        >,

        update: procedure
            .input($Schema.TypeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['update'],
            ReturnType<PrismaClient['type']['update']>
        >,

        upsert: procedure
            .input($Schema.TypeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['upsert'],
            ReturnType<PrismaClient['type']['upsert']>
        >,

        count: procedure
            .input($Schema.TypeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).type.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['count'],
            ReturnType<PrismaClient['type']['count']>
        >,
    });
}
