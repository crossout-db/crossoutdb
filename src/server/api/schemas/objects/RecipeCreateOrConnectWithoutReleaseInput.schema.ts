import { z } from 'zod';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';
import { RecipeCreateWithoutReleaseInputObjectSchema } from './RecipeCreateWithoutReleaseInput.schema';
import { RecipeUncheckedCreateWithoutReleaseInputObjectSchema } from './RecipeUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateOrConnectWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => RecipeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema),
      z.lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeCreateOrConnectWithoutReleaseInputObjectSchema = Schema;
