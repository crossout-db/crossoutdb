import { z } from 'zod';
import { ItemCreateWithoutTypeInputObjectSchema } from './ItemCreateWithoutTypeInput.schema';
import { ItemUncheckedCreateWithoutTypeInputObjectSchema } from './ItemUncheckedCreateWithoutTypeInput.schema';
import { ItemCreateOrConnectWithoutTypeInputObjectSchema } from './ItemCreateOrConnectWithoutTypeInput.schema';
import { ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './ItemUpsertWithWhereUniqueWithoutTypeInput.schema';
import { ItemCreateManyTypeInputEnvelopeObjectSchema } from './ItemCreateManyTypeInputEnvelope.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './ItemUpdateWithWhereUniqueWithoutTypeInput.schema';
import { ItemUpdateManyWithWhereWithoutTypeInputObjectSchema } from './ItemUpdateManyWithWhereWithoutTypeInput.schema';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithoutTypeNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema),
        z
          .lazy(() => ItemUpsertWithWhereUniqueWithoutTypeInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ItemCreateManyTypeInputEnvelopeObjectSchema)
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
        z.lazy(() => ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema),
        z
          .lazy(() => ItemUpdateWithWhereUniqueWithoutTypeInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ItemUpdateManyWithWhereWithoutTypeInputObjectSchema),
        z
          .lazy(() => ItemUpdateManyWithWhereWithoutTypeInputObjectSchema)
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

export const ItemUpdateManyWithoutTypeNestedInputObjectSchema = Schema;
