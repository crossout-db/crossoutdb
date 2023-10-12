import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type RecipeItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.RecipeItemFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RecipeItemFindFirstArgs>;
    findMany: z.ZodType<Prisma.RecipeItemFindManyArgs>;
    create: z.ZodType<Prisma.RecipeItemCreateArgs>;
    createMany: z.ZodType<Prisma.RecipeItemCreateManyArgs>;
    delete: z.ZodType<Prisma.RecipeItemDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RecipeItemDeleteManyArgs>;
    update: z.ZodType<Prisma.RecipeItemUpdateArgs>;
    updateMany: z.ZodType<Prisma.RecipeItemUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RecipeItemUpsertArgs>;
    aggregate: z.ZodType<Prisma.RecipeItemAggregateArgs>;
    groupBy: z.ZodType<Prisma.RecipeItemGroupByArgs>;
    count: z.ZodType<Prisma.RecipeItemCountArgs>;
};
export declare const RecipeItemInputSchema: RecipeItemInputSchemaType;
export {};
