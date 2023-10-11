import { z } from 'zod';
import { RecipeItemCreateManyItemInputObjectSchema } from './RecipeItemCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RecipeItemCreateManyItemInputObjectSchema),
      z.lazy(() => RecipeItemCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RecipeItemCreateManyItemInputEnvelopeObjectSchema = Schema;
