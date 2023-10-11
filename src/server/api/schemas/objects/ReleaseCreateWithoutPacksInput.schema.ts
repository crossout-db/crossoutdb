import { z } from 'zod';
import { ItemStatsCreateNestedManyWithoutReleaseInputObjectSchema } from './ItemStatsCreateNestedManyWithoutReleaseInput.schema';
import { RecipeCreateNestedManyWithoutReleaseInputObjectSchema } from './RecipeCreateNestedManyWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateWithoutPacksInput> = z
  .object({
    name: z.string(),
    xoVersion: z.string().optional().nullable(),
    build: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    battlePass: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    active: z.boolean(),
    itemStats: z
      .lazy(() => ItemStatsCreateNestedManyWithoutReleaseInputObjectSchema)
      .optional(),
    recipes: z
      .lazy(() => RecipeCreateNestedManyWithoutReleaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReleaseCreateWithoutPacksInputObjectSchema = Schema;
