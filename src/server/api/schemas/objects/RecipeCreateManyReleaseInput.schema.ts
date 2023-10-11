import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateManyReleaseInput> = z
  .object({
    id: z.number().optional(),
    resultItemId: z.number(),
    quantity: z.number(),
    craftCost: z.number().optional().nullable(),
    timestamp: z.coerce.date().optional().nullable(),
    active: z.boolean(),
  })
  .strict();

export const RecipeCreateManyReleaseInputObjectSchema = Schema;
