import { z } from 'zod';
import { RecipeCreateNestedManyWithoutReleaseInputObjectSchema } from './RecipeCreateNestedManyWithoutReleaseInput.schema';
import { PackCreateNestedManyWithoutReleaseInputObjectSchema } from './PackCreateNestedManyWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateWithoutItemStatsInput> = z
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
    recipes: z
      .lazy(() => RecipeCreateNestedManyWithoutReleaseInputObjectSchema)
      .optional(),
    packs: z
      .lazy(() => PackCreateNestedManyWithoutReleaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReleaseCreateWithoutItemStatsInputObjectSchema = Schema;
