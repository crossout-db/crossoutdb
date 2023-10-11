import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutReleaseInputObjectSchema } from './RecipeUpdateWithoutReleaseInput.schema';
import { RecipeUncheckedUpdateWithoutReleaseInputObjectSchema } from './RecipeUncheckedUpdateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateWithWhereUniqueWithoutReleaseInput> =
  z
    .object({
      where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeUpdateWithoutReleaseInputObjectSchema),
        z.lazy(() => RecipeUncheckedUpdateWithoutReleaseInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeUpdateWithWhereUniqueWithoutReleaseInputObjectSchema =
  Schema;
