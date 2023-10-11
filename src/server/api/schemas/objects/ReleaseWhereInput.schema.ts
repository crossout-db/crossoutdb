import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ItemStatsListRelationFilterObjectSchema } from './ItemStatsListRelationFilter.schema';
import { RecipeListRelationFilterObjectSchema } from './RecipeListRelationFilter.schema';
import { PackListRelationFilterObjectSchema } from './PackListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReleaseWhereInputObjectSchema),
        z.lazy(() => ReleaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReleaseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReleaseWhereInputObjectSchema),
        z.lazy(() => ReleaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    xoVersion: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    build: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    battlePass: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    endDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    active: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    itemStats: z.lazy(() => ItemStatsListRelationFilterObjectSchema).optional(),
    recipes: z.lazy(() => RecipeListRelationFilterObjectSchema).optional(),
    packs: z.lazy(() => PackListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ReleaseWhereInputObjectSchema = Schema;
