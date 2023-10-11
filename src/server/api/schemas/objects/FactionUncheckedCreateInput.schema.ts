import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutFactionInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutFactionInputObjectSchema)
      .optional(),
  })
  .strict();

export const FactionUncheckedCreateInputObjectSchema = Schema;
