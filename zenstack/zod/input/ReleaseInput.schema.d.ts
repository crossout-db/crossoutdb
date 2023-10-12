import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type ReleaseInputSchemaType = {
    findUnique: z.ZodType<Prisma.ReleaseFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ReleaseFindFirstArgs>;
    findMany: z.ZodType<Prisma.ReleaseFindManyArgs>;
    create: z.ZodType<Prisma.ReleaseCreateArgs>;
    createMany: z.ZodType<Prisma.ReleaseCreateManyArgs>;
    delete: z.ZodType<Prisma.ReleaseDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ReleaseDeleteManyArgs>;
    update: z.ZodType<Prisma.ReleaseUpdateArgs>;
    updateMany: z.ZodType<Prisma.ReleaseUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ReleaseUpsertArgs>;
    aggregate: z.ZodType<Prisma.ReleaseAggregateArgs>;
    groupBy: z.ZodType<Prisma.ReleaseGroupByArgs>;
    count: z.ZodType<Prisma.ReleaseCountArgs>;
};
export declare const ReleaseInputSchema: ReleaseInputSchemaType;
export {};
