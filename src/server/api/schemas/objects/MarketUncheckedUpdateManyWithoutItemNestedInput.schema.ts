import { z } from 'zod';
import { MarketCreateWithoutItemInputObjectSchema } from './MarketCreateWithoutItemInput.schema';
import { MarketUncheckedCreateWithoutItemInputObjectSchema } from './MarketUncheckedCreateWithoutItemInput.schema';
import { MarketCreateOrConnectWithoutItemInputObjectSchema } from './MarketCreateOrConnectWithoutItemInput.schema';
import { MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './MarketUpsertWithWhereUniqueWithoutItemInput.schema';
import { MarketCreateManyItemInputEnvelopeObjectSchema } from './MarketCreateManyItemInputEnvelope.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './MarketUpdateWithWhereUniqueWithoutItemInput.schema';
import { MarketUpdateManyWithWhereWithoutItemInputObjectSchema } from './MarketUpdateManyWithWhereWithoutItemInput.schema';
import { MarketScalarWhereInputObjectSchema } from './MarketScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUncheckedUpdateManyWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MarketCreateWithoutItemInputObjectSchema),
          z.lazy(() => MarketCreateWithoutItemInputObjectSchema).array(),
          z.lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema),
          z
            .lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MarketCreateOrConnectWithoutItemInputObjectSchema),
          z
            .lazy(() => MarketCreateOrConnectWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema),
          z
            .lazy(() => MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MarketCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MarketWhereUniqueInputObjectSchema),
          z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MarketWhereUniqueInputObjectSchema),
          z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MarketWhereUniqueInputObjectSchema),
          z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MarketWhereUniqueInputObjectSchema),
          z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema),
          z
            .lazy(() => MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MarketUpdateManyWithWhereWithoutItemInputObjectSchema),
          z
            .lazy(() => MarketUpdateManyWithWhereWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MarketScalarWhereInputObjectSchema),
          z.lazy(() => MarketScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MarketUncheckedUpdateManyWithoutItemNestedInputObjectSchema =
  Schema;
