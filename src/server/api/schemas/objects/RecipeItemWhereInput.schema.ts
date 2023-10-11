import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { RecipeRelationFilterObjectSchema } from './RecipeRelationFilter.schema';
import { RecipeWhereInputObjectSchema } from './RecipeWhereInput.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RecipeItemWhereInputObjectSchema),
        z.lazy(() => RecipeItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RecipeItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RecipeItemWhereInputObjectSchema),
        z.lazy(() => RecipeItemWhereInputObjectSchema).array(),
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
    recipe: z
      .union([
        z.lazy(() => RecipeRelationFilterObjectSchema),
        z.lazy(() => RecipeWhereInputObjectSchema),
      ])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RecipeItemWhereInputObjectSchema = Schema;
