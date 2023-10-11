import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutReleaseInputObjectSchema } from './RecipeUpdateWithoutReleaseInput.schema';
import { RecipeUncheckedUpdateWithoutReleaseInputObjectSchema } from './RecipeUncheckedUpdateWithoutReleaseInput.schema';
import { RecipeCreateWithoutReleaseInputObjectSchema } from './RecipeCreateWithoutReleaseInput.schema';
import { RecipeUncheckedCreateWithoutReleaseInputObjectSchema } from './RecipeUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpsertWithWhereUniqueWithoutReleaseInput> =
  z
    .object({
      where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RecipeUpdateWithoutReleaseInputObjectSchema),
        z.lazy(() => RecipeUncheckedUpdateWithoutReleaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema),
        z.lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeUpsertWithWhereUniqueWithoutReleaseInputObjectSchema =
  Schema;
