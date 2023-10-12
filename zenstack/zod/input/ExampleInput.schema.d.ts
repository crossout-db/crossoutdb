import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type ExampleInputSchemaType = {
    findUnique: z.ZodType<Prisma.ExampleFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.ExampleFindFirstArgs>;
    findMany: z.ZodType<Prisma.ExampleFindManyArgs>;
    create: z.ZodType<Prisma.ExampleCreateArgs>;
    createMany: z.ZodType<Prisma.ExampleCreateManyArgs>;
    delete: z.ZodType<Prisma.ExampleDeleteArgs>;
    deleteMany: z.ZodType<Prisma.ExampleDeleteManyArgs>;
    update: z.ZodType<Prisma.ExampleUpdateArgs>;
    updateMany: z.ZodType<Prisma.ExampleUpdateManyArgs>;
    upsert: z.ZodType<Prisma.ExampleUpsertArgs>;
    aggregate: z.ZodType<Prisma.ExampleAggregateArgs>;
    groupBy: z.ZodType<Prisma.ExampleGroupByArgs>;
    count: z.ZodType<Prisma.ExampleCountArgs>;
};
export declare const ExampleInputSchema: ExampleInputSchemaType;
export {};
