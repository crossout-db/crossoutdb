import { z } from 'zod';
import { ItemCreateWithoutFactionInputObjectSchema } from './ItemCreateWithoutFactionInput.schema';
import { ItemUncheckedCreateWithoutFactionInputObjectSchema } from './ItemUncheckedCreateWithoutFactionInput.schema';
import { ItemCreateOrConnectWithoutFactionInputObjectSchema } from './ItemCreateOrConnectWithoutFactionInput.schema';
import { ItemCreateManyFactionInputEnvelopeObjectSchema } from './ItemCreateManyFactionInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateNestedManyWithoutFactionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemCreateWithoutFactionInputObjectSchema),
        z.lazy(() => ItemCreateWithoutFactionInputObjectSchema).array(),
        z.lazy(() => ItemUncheckedCreateWithoutFactionInputObjectSchema),
        z
          .lazy(() => ItemUncheckedCreateWithoutFactionInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ItemCreateOrConnectWithoutFactionInputObjectSchema),
        z
          .lazy(() => ItemCreateOrConnectWithoutFactionInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyFactionInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemCreateNestedManyWithoutFactionInputObjectSchema = Schema;
