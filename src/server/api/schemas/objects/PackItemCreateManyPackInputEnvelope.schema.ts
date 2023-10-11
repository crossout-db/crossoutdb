import { z } from 'zod';
import { PackItemCreateManyPackInputObjectSchema } from './PackItemCreateManyPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateManyPackInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PackItemCreateManyPackInputObjectSchema),
      z.lazy(() => PackItemCreateManyPackInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PackItemCreateManyPackInputEnvelopeObjectSchema = Schema;
