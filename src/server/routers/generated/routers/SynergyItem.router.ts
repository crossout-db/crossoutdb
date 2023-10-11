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
            .input($Schema.SynergyItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['synergyItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.SynergyItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['createMany'],
            ReturnType<PrismaClient['synergyItem']['createMany']>
        >,

        create: procedure
            .input($Schema.SynergyItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['create'],
            ReturnType<PrismaClient['synergyItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SynergyItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['synergyItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SynergyItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['delete'],
            ReturnType<PrismaClient['synergyItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SynergyItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergyItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SynergyItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergyItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SynergyItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findMany'],
            ReturnType<PrismaClient['synergyItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SynergyItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergyItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SynergyItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergyItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SynergyItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['synergyItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SynergyItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['synergyItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.SynergyItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['update'],
            ReturnType<PrismaClient['synergyItem']['update']>
        >,

        upsert: procedure
            .input($Schema.SynergyItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['upsert'],
            ReturnType<PrismaClient['synergyItem']['upsert']>
        >,

        count: procedure
            .input($Schema.SynergyItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['count'],
            ReturnType<PrismaClient['synergyItem']['count']>
        >,
    });
}
