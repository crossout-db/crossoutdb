import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const TypeUncheckedCreateInputObjectSchema = Schema;
