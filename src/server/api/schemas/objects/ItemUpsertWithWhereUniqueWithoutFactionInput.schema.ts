import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutFactionInputObjectSchema } from './ItemUpdateWithoutFactionInput.schema';
import { ItemUncheckedUpdateWithoutFactionInputObjectSchema } from './ItemUncheckedUpdateWithoutFactionInput.schema';
import { ItemCreateWithoutFactionInputObjectSchema } from './ItemCreateWithoutFactionInput.schema';
import { ItemUncheckedCreateWithoutFactionInputObjectSchema } from './ItemUncheckedCreateWithoutFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutFactionInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ItemUpdateWithoutFactionInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutFactionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutFactionInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutFactionInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema = Schema;
