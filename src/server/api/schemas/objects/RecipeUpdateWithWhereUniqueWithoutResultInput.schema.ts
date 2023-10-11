import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutResultInputObjectSchema } from './RecipeUpdateWithoutResultInput.schema';
import { RecipeUncheckedUpdateWithoutResultInputObjectSchema } from './RecipeUncheckedUpdateWithoutResultInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateWithWhereUniqueWithoutResultInput> =
  z
    .object({
      where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeUpdateWithoutResultInputObjectSchema),
        z.lazy(() => RecipeUncheckedUpdateWithoutResultInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeUpdateWithWhereUniqueWithoutResultInputObjectSchema = Schema;
