import { z } from 'zod';
import { PackPriceCreateManyPackInputObjectSchema } from './PackPriceCreateManyPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateManyPackInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PackPriceCreateManyPackInputObjectSchema),
      z.lazy(() => PackPriceCreateManyPackInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PackPriceCreateManyPackInputEnvelopeObjectSchema = Schema;
