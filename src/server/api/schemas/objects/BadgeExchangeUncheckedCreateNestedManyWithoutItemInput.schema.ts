import { z } from 'zod';
import { BadgeExchangeCreateWithoutItemInputObjectSchema } from './BadgeExchangeCreateWithoutItemInput.schema';
import { BadgeExchangeUncheckedCreateWithoutItemInputObjectSchema } from './BadgeExchangeUncheckedCreateWithoutItemInput.schema';
import { BadgeExchangeCreateOrConnectWithoutItemInputObjectSchema } from './BadgeExchangeCreateOrConnectWithoutItemInput.schema';
import { BadgeExchangeCreateManyItemInputEnvelopeObjectSchema } from './BadgeExchangeCreateManyItemInputEnvelope.schema';
import { BadgeExchangeWhereUniqueInputObjectSchema } from './BadgeExchangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUncheckedCreateNestedManyWithoutItemInput> =
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
      createMany: z
        .lazy(() => BadgeExchangeCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema),
          z.lazy(() => BadgeExchangeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BadgeExchangeUncheckedCreateNestedManyWithoutItemInputObjectSchema =
  Schema;
