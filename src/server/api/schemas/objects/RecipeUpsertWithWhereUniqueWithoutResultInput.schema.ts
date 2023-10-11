import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeUpdateWithoutResultInputObjectSchema } from './RecipeUpdateWithoutResultInput.schema';
import { RecipeUncheckedUpdateWithoutResultInputObjectSchema } from './RecipeUncheckedUpdateWithoutResultInput.schema';
import { RecipeCreateWithoutResultInputObjectSchema } from './RecipeCreateWithoutResultInput.schema';
import { RecipeUncheckedCreateWithoutResultInputObjectSchema } from './RecipeUncheckedCreateWithoutResultInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpsertWithWhereUniqueWithoutResultInput> =
  z
    .object({
      where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RecipeUpdateWithoutResultInputObjectSchema),
        z.lazy(() => RecipeUncheckedUpdateWithoutResultInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RecipeCreateWithoutResultInputObjectSchema),
        z.lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeUpsertWithWhereUniqueWithoutResultInputObjectSchema = Schema;
