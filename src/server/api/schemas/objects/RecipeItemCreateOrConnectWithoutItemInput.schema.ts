import { z } from 'zod';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';
import { RecipeItemCreateWithoutItemInputObjectSchema } from './RecipeItemCreateWithoutItemInput.schema';
import { RecipeItemUncheckedCreateWithoutItemInputObjectSchema } from './RecipeItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeItemCreateOrConnectWithoutItemInputObjectSchema = Schema;
