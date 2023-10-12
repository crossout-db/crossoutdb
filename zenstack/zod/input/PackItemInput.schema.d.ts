import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type PackItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.PackItemFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PackItemFindFirstArgs>;
    findMany: z.ZodType<Prisma.PackItemFindManyArgs>;
    create: z.ZodType<Prisma.PackItemCreateArgs>;
    createMany: z.ZodType<Prisma.PackItemCreateManyArgs>;
    delete: z.ZodType<Prisma.PackItemDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PackItemDeleteManyArgs>;
    update: z.ZodType<Prisma.PackItemUpdateArgs>;
    updateMany: z.ZodType<Prisma.PackItemUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PackItemUpsertArgs>;
    aggregate: z.ZodType<Prisma.PackItemAggregateArgs>;
    groupBy: z.ZodType<Prisma.PackItemGroupByArgs>;
    count: z.ZodType<Prisma.PackItemCountArgs>;
};
export declare const PackItemInputSchema: PackItemInputSchemaType;
export {};
