import { z } from 'zod';
import { ItemCreateManyCategoryInputObjectSchema } from './ItemCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemCreateManyCategoryInputObjectSchema),
      z.lazy(() => ItemCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyCategoryInputEnvelopeObjectSchema = Schema;
