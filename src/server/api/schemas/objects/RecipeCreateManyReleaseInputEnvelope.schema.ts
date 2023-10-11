import { z } from 'zod';
import { RecipeCreateManyReleaseInputObjectSchema } from './RecipeCreateManyReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateManyReleaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RecipeCreateManyReleaseInputObjectSchema),
      z.lazy(() => RecipeCreateManyReleaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RecipeCreateManyReleaseInputEnvelopeObjectSchema = Schema;
