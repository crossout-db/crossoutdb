import { z } from 'zod';
import { PackCreateManyReleaseInputObjectSchema } from './PackCreateManyReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateManyReleaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PackCreateManyReleaseInputObjectSchema),
      z.lazy(() => PackCreateManyReleaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PackCreateManyReleaseInputEnvelopeObjectSchema = Schema;
