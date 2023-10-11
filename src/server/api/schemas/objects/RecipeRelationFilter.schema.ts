import { z } from 'zod';
import { RecipeWhereInputObjectSchema } from './RecipeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeRelationFilter> = z
  .object({
    is: z
      .lazy(() => RecipeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RecipeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RecipeRelationFilterObjectSchema = Schema;
