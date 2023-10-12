import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type RecipeInputSchemaType = {
    findUnique: z.ZodType<Prisma.RecipeFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RecipeFindFirstArgs>;
    findMany: z.ZodType<Prisma.RecipeFindManyArgs>;
    create: z.ZodType<Prisma.RecipeCreateArgs>;
    createMany: z.ZodType<Prisma.RecipeCreateManyArgs>;
    delete: z.ZodType<Prisma.RecipeDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RecipeDeleteManyArgs>;
    update: z.ZodType<Prisma.RecipeUpdateArgs>;
    updateMany: z.ZodType<Prisma.RecipeUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RecipeUpsertArgs>;
    aggregate: z.ZodType<Prisma.RecipeAggregateArgs>;
    groupBy: z.ZodType<Prisma.RecipeGroupByArgs>;
    count: z.ZodType<Prisma.RecipeCountArgs>;
};
export declare const RecipeInputSchema: RecipeInputSchemaType;
export {};
