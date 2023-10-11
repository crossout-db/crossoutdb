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
            .input($Schema.SynergyInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['aggregate'],
            ReturnType<PrismaClient['synergy']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.SynergyInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['createMany'],
            ReturnType<PrismaClient['synergy']['createMany']>
        >,

        create: procedure
            .input($Schema.SynergyInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['create'],
            ReturnType<PrismaClient['synergy']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SynergyInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['deleteMany'],
            ReturnType<PrismaClient['synergy']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SynergyInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['delete'],
            ReturnType<PrismaClient['synergy']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SynergyInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergy']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SynergyInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergy']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SynergyInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findMany'],
            ReturnType<PrismaClient['synergy']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SynergyInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergy']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SynergyInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergy']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SynergyInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['groupBy'],
            ReturnType<PrismaClient['synergy']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SynergyInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['updateMany'],
            ReturnType<PrismaClient['synergy']['updateMany']>
        >,

        update: procedure
            .input($Schema.SynergyInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['update'],
            ReturnType<PrismaClient['synergy']['update']>
        >,

        upsert: procedure
            .input($Schema.SynergyInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['upsert'],
            ReturnType<PrismaClient['synergy']['upsert']>
        >,

        count: procedure
            .input($Schema.SynergyInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['count'],
            ReturnType<PrismaClient['synergy']['count']>
        >,
    });
}
