import { z } from 'zod';
import { ItemCreateWithoutFactionInputObjectSchema } from './ItemCreateWithoutFactionInput.schema';
import { ItemUncheckedCreateWithoutFactionInputObjectSchema } from './ItemUncheckedCreateWithoutFactionInput.schema';
import { ItemCreateOrConnectWithoutFactionInputObjectSchema } from './ItemCreateOrConnectWithoutFactionInput.schema';
import { ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutFactionInput.schema';
import { ItemCreateManyFactionInputEnvelopeObjectSchema } from './ItemCreateManyFactionInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutFactionInput.schema';
import { ItemUpdateManyWithWhereWithoutFactionInputObjectSchema } from './ItemUpdateManyWithWhereWithoutFactionInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithoutFactionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema),
        z
          .lazy(() => ItemUpsertWithWhereUniqueWithoutFactionInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyFactionInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ItemWhereUniqueInputObjectSchema),
        z.lazy(() => ItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema),
        z
          .lazy(() => ItemUpdateWithWhereUniqueWithoutFactionInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemUpdateManyWithWhereWithoutFactionInputObjectSchema),
        z
          .lazy(() => ItemUpdateManyWithWhereWithoutFactionInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ItemScalarWhereInputObjectSchema),
        z.lazy(() => ItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ItemUpdateManyWithoutFactionNestedInputObjectSchema = Schema;
