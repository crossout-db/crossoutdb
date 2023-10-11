import { z } from 'zod';
import { MarketCreateManyItemInputObjectSchema } from './MarketCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MarketCreateManyItemInputObjectSchema),
      z.lazy(() => MarketCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MarketCreateManyItemInputEnvelopeObjectSchema = Schema;
