import { z } from 'zod';
import { BadgeExchangeCreateWithoutItemInputObjectSchema } from './BadgeExchangeCreateWithoutItemInput.schema';
import { BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedCreateWithoutItemInput.schema';
import { BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema } from './BadgeExchangeCreateOrConnectWithoutItemInput.schema';
import { BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './BadgeExchangeUpsertWithWhereUniqueWithoutItemInput.schema';
import { BadgeExchangeCreateManyItemInputEnvelopeObjectSchema } from './BadgeExchangeCreateManyItemInputEnvelope.schema';
import { BadgeExchangeWhereUniqueInputObjectSchema } from './BadgeExchangeWhereUniqueInput.schema';
import { BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './BadgeExchangeUpdateWithWhereUniqueWithoutItemInput.schema';
import { BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema } from './BadgeExchangeUpdateManyWithWhereWithoutItemInput.schema';
import { BadgeExchangeScalarWhereInputObjectSchema } from './BadgeExchangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUpdateManyWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BadgeExchangeCreateWithoutItemInputObjectSchema),
          z.lazy(() => BadgeExchangeCreateWithoutItemInputObjectSchema).array(),
          z.lazy(
            () => BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BadgeExchangeUpsertWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BadgeExchangeCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BadgeExchangeUpdateWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BadgeExchangeScalarWhereInputObjectSchema),
          z.lazy(() => BadgeExchangeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BadgeExchangeUpdateManyWithoutItemNestedInputObjectSchema = Schema;
