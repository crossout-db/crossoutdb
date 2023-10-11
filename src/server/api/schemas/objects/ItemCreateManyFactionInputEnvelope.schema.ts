import { z } from 'zod';
import { ItemCreateManyFactionInputObjectSchema } from './ItemCreateManyFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyFactionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemCreateManyFactionInputObjectSchema),
      z.lazy(() => ItemCreateManyFactionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyFactionInputEnvelopeObjectSchema = Schema;
