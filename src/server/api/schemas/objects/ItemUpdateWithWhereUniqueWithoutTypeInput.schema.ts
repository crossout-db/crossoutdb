import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutTypeInputObjectSchema } from './ItemUpdateWithoutTypeInput.schema';
import { ItemUncheckedUpdateWithoutTypeInputObjectSchema } from './ItemUncheckedUpdateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema = Schema;
