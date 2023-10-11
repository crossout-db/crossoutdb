import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutFactionInputObjectSchema } from './ItemCreateWithoutFactionInput.schema';
import { ItemUncheckedCreateWithoutFactionInputObjectSchema } from './ItemUncheckedCreateWithoutFactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutFactionInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutFactionInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutFactionInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutFactionInputObjectSchema = Schema;
