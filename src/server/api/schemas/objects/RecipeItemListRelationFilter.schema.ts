import { z } from 'zod';
import { RecipeItemWhereInputObjectSchema } from './RecipeItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemListRelationFilter> = z
  .object({
    every: z.lazy(() => RecipeItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => RecipeItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => RecipeItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const RecipeItemListRelationFilterObjectSchema = Schema;
