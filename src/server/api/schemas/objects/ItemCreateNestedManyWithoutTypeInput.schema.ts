import { z } from 'zod';
import { ItemCreateWithoutTypeInputObjectSchema } from './ItemCreateWithoutTypeInput.schema';
import { ItemUncheckedCreateWithoutTypeInputObjectSchema } from './ItemUncheckedCreateWithoutTypeInput.schema';
import { ItemCreateOrConnectWithoutTypeInputObjectSchema } from './ItemCreateOrConnectWithoutTypeInput.schema';
import { ItemCreateManyTypeInputEnvelopeObjectSchema } from './ItemCreateManyTypeInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedManyWithoutTypeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutTypeInputObjectSchema),
        z.lazy(() => ItemCreateWithoutTypeInputObjectSchema).array(),
        z.lazy(() => ItemUncheckedCreateWithoutTypeInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemCreateOrConnectWithoutTypeInputObjectSchema),
        z.lazy(() => ItemCreateOrConnectWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyTypeInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemCreateNestedManyWithoutTypeInputObjectSchema = Schema;
