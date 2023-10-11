import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutFactionInputObjectSchema } from './ItemUpdateWithoutFactionInput.schema';
import { ItemUncheckedUpdateWithoutFactionInputObjectSchema } from './ItemUncheckedUpdateWithoutFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutFactionInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateWithoutFactionInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutFactionInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema = Schema;
