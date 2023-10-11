import { z } from 'zod';
import { ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema } from './ItemStatsUncheckedCreateNestedManyWithoutReleaseInput.schema';
import { RecipeUncheckedCreateNestedManyWithoutReleaseInputObjectSchema } from './RecipeUncheckedCreateNestedManyWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUncheckedCreateWithoutPacksInput> = z
  .object({
    id: z.number().optional(),
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
      .lazy(
        () => ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema,
      )
      .optional(),
    recipes: z
      .lazy(
        () => RecipeUncheckedCreateNestedManyWithoutReleaseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ReleaseUncheckedCreateWithoutPacksInputObjectSchema = Schema;
