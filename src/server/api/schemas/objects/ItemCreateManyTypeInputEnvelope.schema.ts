import { z } from 'zod';
import { ItemCreateManyTypeInputObjectSchema } from './ItemCreateManyTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateManyTypeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ItemCreateManyTypeInputObjectSchema),
      z.lazy(() => ItemCreateManyTypeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ItemCreateManyTypeInputEnvelopeObjectSchema = Schema;
