import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ReleaseRelationFilterObjectSchema } from './ReleaseRelationFilter.schema';
import { ReleaseWhereInputObjectSchema } from './ReleaseWhereInput.schema';
import { RecipeItemListRelationFilterObjectSchema } from './RecipeItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RecipeWhereInputObjectSchema),
        z.lazy(() => RecipeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RecipeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RecipeWhereInputObjectSchema),
        z.lazy(() => RecipeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    resultItemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    releaseId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    craftCost: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    timestamp: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    active: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    result: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
    release: z
      .union([
        z.lazy(() => ReleaseRelationFilterObjectSchema),
        z.lazy(() => ReleaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    ingredients: z
      .lazy(() => RecipeItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const RecipeWhereInputObjectSchema = Schema;
