import { z } from 'zod';
import { RecipeCreateManyResultInputObjectSchema } from './RecipeCreateManyResultInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateManyResultInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RecipeCreateManyResultInputObjectSchema),
      z.lazy(() => RecipeCreateManyResultInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RecipeCreateManyResultInputEnvelopeObjectSchema = Schema;
