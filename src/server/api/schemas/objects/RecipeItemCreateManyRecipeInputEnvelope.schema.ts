import { z } from 'zod';
import { RecipeItemCreateManyRecipeInputObjectSchema } from './RecipeItemCreateManyRecipeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateManyRecipeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RecipeItemCreateManyRecipeInputObjectSchema),
      z.lazy(() => RecipeItemCreateManyRecipeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RecipeItemCreateManyRecipeInputEnvelopeObjectSchema = Schema;
