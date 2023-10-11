import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithoutItemInputObjectSchema } from './RecipeItemUpdateWithoutItemInput.schema';
import { RecipeItemUncheckedUpdateWithoutItemInputObjectSchema } from './RecipeItemUncheckedUpdateWithoutItemInput.schema';
import { RecipeItemCreateWithoutItemInputObjectSchema } from './RecipeItemCreateWithoutItemInput.schema';
import { RecipeItemUncheckedCreateWithoutItemInputObjectSchema } from './RecipeItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RecipeItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
