import { z } from 'zod';
import { ItemCreateNestedManyWithoutRarityInputObjectSchema } from './ItemCreateNestedManyWithoutRarityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityCreateInput> = z
  .object({
    name: z.string(),
    order: z.number(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutRarityInputObjectSchema)
      .optional(),
  })
  .strict();

export const RarityCreateInputObjectSchema = Schema;
