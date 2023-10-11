import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemCreateWithoutRecipeInputObjectSchema } from './RecipeItemCreateWithoutRecipeInput.schema';
import { RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedCreateWithoutRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateOrConnectWithoutRecipeInput> = z
  .object({
    where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema),
      z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema = Schema;
