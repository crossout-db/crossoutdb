import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateManyMutationInput> = z
  .object({})
  .strict();

export const SynergyItemUpdateManyMutationInputObjectSchema = Schema;
