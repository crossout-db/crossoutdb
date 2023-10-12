import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type FactionInputSchemaType = {
    findUnique: z.ZodType<Prisma.FactionFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.FactionFindFirstArgs>;
    findMany: z.ZodType<Prisma.FactionFindManyArgs>;
    create: z.ZodType<Prisma.FactionCreateArgs>;
    createMany: z.ZodType<Prisma.FactionCreateManyArgs>;
    delete: z.ZodType<Prisma.FactionDeleteArgs>;
    deleteMany: z.ZodType<Prisma.FactionDeleteManyArgs>;
    update: z.ZodType<Prisma.FactionUpdateArgs>;
    updateMany: z.ZodType<Prisma.FactionUpdateManyArgs>;
    upsert: z.ZodType<Prisma.FactionUpsertArgs>;
    aggregate: z.ZodType<Prisma.FactionAggregateArgs>;
    groupBy: z.ZodType<Prisma.FactionGroupByArgs>;
    count: z.ZodType<Prisma.FactionCountArgs>;
};
export declare const FactionInputSchema: FactionInputSchemaType;
export {};
