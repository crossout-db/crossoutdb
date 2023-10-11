import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemUpdateWithoutItemInputObjectSchema } from './RecipeItemUpdateWithoutItemInput.schema';
import { RecipeItemUncheckedUpdateWithoutItemInputObjectSchema } from './RecipeItemUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RecipeItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => RecipeItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
