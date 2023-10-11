import { z } from 'zod';
import { RecipeWhereInputObjectSchema } from './RecipeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeListRelationFilter> = z
  .object({
    every: z.lazy(() => RecipeWhereInputObjectSchema).optional(),
    some: z.lazy(() => RecipeWhereInputObjectSchema).optional(),
    none: z.lazy(() => RecipeWhereInputObjectSchema).optional(),
  })
  .strict();

export const RecipeListRelationFilterObjectSchema = Schema;
