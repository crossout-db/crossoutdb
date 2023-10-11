import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    order: z.number(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutRarityInputObjectSchema)
      .optional(),
  })
  .strict();

export const RarityUncheckedCreateInputObjectSchema = Schema;
