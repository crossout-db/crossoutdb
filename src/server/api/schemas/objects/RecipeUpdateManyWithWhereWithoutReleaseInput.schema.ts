import { z } from 'zod';
import { RecipeScalarWhereInputObjectSchema } from './RecipeScalarWhereInput.schema';
import { RecipeUpdateManyMutationInputObjectSchema } from './RecipeUpdateManyMutationInput.schema';
import { RecipeUncheckedUpdateManyWithoutRecipesInputObjectSchema } from './RecipeUncheckedUpdateManyWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUpdateManyWithWhereWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => RecipeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RecipeUpdateManyMutationInputObjectSchema),
      z.lazy(() => RecipeUncheckedUpdateManyWithoutRecipesInputObjectSchema),
    ]),
  })
  .strict();

export const RecipeUpdateManyWithWhereWithoutReleaseInputObjectSchema = Schema;
