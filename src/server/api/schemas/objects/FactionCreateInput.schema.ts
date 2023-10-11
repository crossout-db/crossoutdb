import { z } from 'zod';
import { ItemCreateNestedManyWithoutFactionInputObjectSchema } from './ItemCreateNestedManyWithoutFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionCreateInput> = z
  .object({
    name: z.string(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutFactionInputObjectSchema)
      .optional(),
  })
  .strict();

export const FactionCreateInputObjectSchema = Schema;
