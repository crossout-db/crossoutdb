import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type CategoryInputSchemaType = {
    findUnique: z.ZodType<Prisma.CategoryFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.CategoryFindFirstArgs>;
    findMany: z.ZodType<Prisma.CategoryFindManyArgs>;
    create: z.ZodType<Prisma.CategoryCreateArgs>;
    createMany: z.ZodType<Prisma.CategoryCreateManyArgs>;
    delete: z.ZodType<Prisma.CategoryDeleteArgs>;
    deleteMany: z.ZodType<Prisma.CategoryDeleteManyArgs>;
    update: z.ZodType<Prisma.CategoryUpdateArgs>;
    updateMany: z.ZodType<Prisma.CategoryUpdateManyArgs>;
    upsert: z.ZodType<Prisma.CategoryUpsertArgs>;
    aggregate: z.ZodType<Prisma.CategoryAggregateArgs>;
    groupBy: z.ZodType<Prisma.CategoryGroupByArgs>;
    count: z.ZodType<Prisma.CategoryCountArgs>;
};
export declare const CategoryInputSchema: CategoryInputSchemaType;
export {};
