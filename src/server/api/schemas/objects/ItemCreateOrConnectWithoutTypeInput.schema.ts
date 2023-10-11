import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutTypeInputObjectSchema } from './ItemCreateWithoutTypeInput.schema';
import { ItemUncheckedCreateWithoutTypeInputObjectSchema } from './ItemUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutTypeInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutTypeInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutTypeInputObjectSchema = Schema;
