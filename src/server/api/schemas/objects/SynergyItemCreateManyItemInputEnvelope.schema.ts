import { z } from 'zod';
import { SynergyItemCreateManyItemInputObjectSchema } from './SynergyItemCreateManyItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateManyItemInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SynergyItemCreateManyItemInputObjectSchema),
      z.lazy(() => SynergyItemCreateManyItemInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SynergyItemCreateManyItemInputEnvelopeObjectSchema = Schema;
