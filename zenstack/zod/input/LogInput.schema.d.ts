import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type LogInputSchemaType = {
    findUnique: z.ZodType<Prisma.logFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.logFindFirstArgs>;
    findMany: z.ZodType<Prisma.logFindManyArgs>;
    create: z.ZodType<Prisma.logCreateArgs>;
    createMany: z.ZodType<Prisma.logCreateManyArgs>;
    delete: z.ZodType<Prisma.logDeleteArgs>;
    deleteMany: z.ZodType<Prisma.logDeleteManyArgs>;
    update: z.ZodType<Prisma.logUpdateArgs>;
    updateMany: z.ZodType<Prisma.logUpdateManyArgs>;
    upsert: z.ZodType<Prisma.logUpsertArgs>;
    aggregate: z.ZodType<Prisma.LogAggregateArgs>;
    groupBy: z.ZodType<Prisma.logGroupByArgs>;
    count: z.ZodType<Prisma.logCountArgs>;
};
export declare const LogInputSchema: LogInputSchemaType;
export {};
