import { z } from 'zod';
import { SynergyItemCreateManySynergyInputObjectSchema } from './SynergyItemCreateManySynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateManySynergyInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SynergyItemCreateManySynergyInputObjectSchema),
      z.lazy(() => SynergyItemCreateManySynergyInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SynergyItemCreateManySynergyInputEnvelopeObjectSchema = Schema;
