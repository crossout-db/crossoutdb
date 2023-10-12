import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type RarityInputSchemaType = {
    findUnique: z.ZodType<Prisma.RarityFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RarityFindFirstArgs>;
    findMany: z.ZodType<Prisma.RarityFindManyArgs>;
    create: z.ZodType<Prisma.RarityCreateArgs>;
    createMany: z.ZodType<Prisma.RarityCreateManyArgs>;
    delete: z.ZodType<Prisma.RarityDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RarityDeleteManyArgs>;
    update: z.ZodType<Prisma.RarityUpdateArgs>;
    updateMany: z.ZodType<Prisma.RarityUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RarityUpsertArgs>;
    aggregate: z.ZodType<Prisma.RarityAggregateArgs>;
    groupBy: z.ZodType<Prisma.RarityGroupByArgs>;
    count: z.ZodType<Prisma.RarityCountArgs>;
};
export declare const RarityInputSchema: RarityInputSchemaType;
export {};
