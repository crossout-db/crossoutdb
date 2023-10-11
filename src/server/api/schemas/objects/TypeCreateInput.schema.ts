import { z } from 'zod';
import { ItemCreateNestedManyWithoutTypeInputObjectSchema } from './ItemCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeCreateInput> = z
  .object({
    name: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const TypeCreateInputObjectSchema = Schema;
