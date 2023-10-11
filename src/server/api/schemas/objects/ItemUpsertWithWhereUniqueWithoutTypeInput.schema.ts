import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutTypeInputObjectSchema } from './ItemUpdateWithoutTypeInput.schema';
import { ItemUncheckedUpdateWithoutTypeInputObjectSchema } from './ItemUncheckedUpdateWithoutTypeInput.schema';
import { ItemCreateWithoutTypeInputObjectSchema } from './ItemCreateWithoutTypeInput.schema';
import { ItemUncheckedCreateWithoutTypeInputObjectSchema } from './ItemUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ItemUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutTypeInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema = Schema;
