import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type PackInputSchemaType = {
    findUnique: z.ZodType<Prisma.PackFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PackFindFirstArgs>;
    findMany: z.ZodType<Prisma.PackFindManyArgs>;
    create: z.ZodType<Prisma.PackCreateArgs>;
    createMany: z.ZodType<Prisma.PackCreateManyArgs>;
    delete: z.ZodType<Prisma.PackDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PackDeleteManyArgs>;
    update: z.ZodType<Prisma.PackUpdateArgs>;
    updateMany: z.ZodType<Prisma.PackUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PackUpsertArgs>;
    aggregate: z.ZodType<Prisma.PackAggregateArgs>;
    groupBy: z.ZodType<Prisma.PackGroupByArgs>;
    count: z.ZodType<Prisma.PackCountArgs>;
};
export declare const PackInputSchema: PackInputSchemaType;
export {};
