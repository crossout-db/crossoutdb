import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeCreateWithoutResultInputObjectSchema } from './RecipeCreateWithoutResultInput.schema';
import { RecipeUncheckedCreateWithoutResultInputObjectSchema } from './RecipeUncheckedCreateWithoutResultInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateOrConnectWithoutResultInput> = z
  .object({
    where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RecipeCreateWithoutResultInputObjectSchema),
      z.lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeCreateOrConnectWithoutResultInputObjectSchema = Schema;
