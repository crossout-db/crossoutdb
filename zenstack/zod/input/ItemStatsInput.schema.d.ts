import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type ItemStatsInputSchemaType = {
    findUnique: z.ZodType<Prisma.ItemStatsFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ItemStatsFindFirstArgs>;
    findMany: z.ZodType<Prisma.ItemStatsFindManyArgs>;
    create: z.ZodType<Prisma.ItemStatsCreateArgs>;
    createMany: z.ZodType<Prisma.ItemStatsCreateManyArgs>;
    delete: z.ZodType<Prisma.ItemStatsDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ItemStatsDeleteManyArgs>;
    update: z.ZodType<Prisma.ItemStatsUpdateArgs>;
    updateMany: z.ZodType<Prisma.ItemStatsUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ItemStatsUpsertArgs>;
    aggregate: z.ZodType<Prisma.ItemStatsAggregateArgs>;
    groupBy: z.ZodType<Prisma.ItemStatsGroupByArgs>;
    count: z.ZodType<Prisma.ItemStatsCountArgs>;
};
export declare const ItemStatsInputSchema: ItemStatsInputSchemaType;
export {};
