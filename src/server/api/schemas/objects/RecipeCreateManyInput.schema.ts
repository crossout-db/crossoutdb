import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateManyInput> = z
  .object({
    id: z.number().optional(),
    resultItemId: z.number(),
    quantity: z.number(),
    releaseId: z.number().optional().nullable(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
  })
  .strict();

export const RecipeCreateManyInputObjectSchema = Schema;
