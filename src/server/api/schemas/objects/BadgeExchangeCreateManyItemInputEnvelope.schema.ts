import { z } from 'zod';
import { BadgeExchangeCreateManyItemInputObjectSchema } from './BadgeExchangeCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BadgeExchangeCreateManyItemInputObjectSchema),
      z.lazy(() => BadgeExchangeCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BadgeExchangeCreateManyItemInputEnvelopeObjectSchema = Schema;
