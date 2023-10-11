import { z } from 'zod';
import { PackItemCreateManyItemInputObjectSchema } from './PackItemCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PackItemCreateManyItemInputObjectSchema),
      z.lazy(() => PackItemCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PackItemCreateManyItemInputEnvelopeObjectSchema = Schema;
