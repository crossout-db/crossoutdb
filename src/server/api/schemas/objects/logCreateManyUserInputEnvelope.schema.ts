import { z } from 'zod';
import { logCreateManyUserInputObjectSchema } from './logCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => logCreateManyUserInputObjectSchema),
      z.lazy(() => logCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const logCreateManyUserInputEnvelopeObjectSchema = Schema;
