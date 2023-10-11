import { z } from 'zod';
import { ItemCreateManyRarityInputObjectSchema } from './ItemCreateManyRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyRarityInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemCreateManyRarityInputObjectSchema),
      z.lazy(() => ItemCreateManyRarityInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyRarityInputEnvelopeObjectSchema = Schema;
