import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type ItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.ItemFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ItemFindFirstArgs>;
    findMany: z.ZodType<Prisma.ItemFindManyArgs>;
    create: z.ZodType<Prisma.ItemCreateArgs>;
    createMany: z.ZodType<Prisma.ItemCreateManyArgs>;
    delete: z.ZodType<Prisma.ItemDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ItemDeleteManyArgs>;
    update: z.ZodType<Prisma.ItemUpdateArgs>;
    updateMany: z.ZodType<Prisma.ItemUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ItemUpsertArgs>;
    aggregate: z.ZodType<Prisma.ItemAggregateArgs>;
    groupBy: z.ZodType<Prisma.ItemGroupByArgs>;
    count: z.ZodType<Prisma.ItemCountArgs>;
};
export declare const ItemInputSchema: ItemInputSchemaType;
export {};
