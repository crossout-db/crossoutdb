import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RecipeItemScalarWhereInputObjectSchema),
        z.lazy(() => RecipeItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RecipeItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RecipeItemScalarWhereInputObjectSchema),
        z.lazy(() => RecipeItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    recipeId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    itemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const RecipeItemScalarWhereInputObjectSchema = Schema;
