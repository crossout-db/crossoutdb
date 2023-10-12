import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type SynergyItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.SynergyItemFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.SynergyItemFindFirstArgs>;
    findMany: z.ZodType<Prisma.SynergyItemFindManyArgs>;
    create: z.ZodType<Prisma.SynergyItemCreateArgs>;
    createMany: z.ZodType<Prisma.SynergyItemCreateManyArgs>;
    delete: z.ZodType<Prisma.SynergyItemDeleteArgs>;
    deleteMany: z.ZodType<Prisma.SynergyItemDeleteManyArgs>;
    update: z.ZodType<Prisma.SynergyItemUpdateArgs>;
    updateMany: z.ZodType<Prisma.SynergyItemUpdateManyArgs>;
    upsert: z.ZodType<Prisma.SynergyItemUpsertArgs>;
    aggregate: z.ZodType<Prisma.SynergyItemAggregateArgs>;
    groupBy: z.ZodType<Prisma.SynergyItemGroupByArgs>;
    count: z.ZodType<Prisma.SynergyItemCountArgs>;
};
export declare const SynergyItemInputSchema: SynergyItemInputSchemaType;
export {};
