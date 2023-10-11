import { z } from 'zod';
import { SynergyItemCreateWithoutItemInputObjectSchema } from './SynergyItemCreateWithoutItemInput.schema';
import { SynergyItemUncheckedCreateWithoutItemInputObjectSchema } from './SynergyItemUncheckedCreateWithoutItemInput.schema';
import { SynergyItemCreateOrConnectWithoutItemInputObjectSchema } from './SynergyItemCreateOrConnectWithoutItemInput.schema';
import { SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './SynergyItemUpsertWithWhereUniqueWithoutItemInput.schema';
import { SynergyItemCreateManyItemInputEnvelopeObjectSchema } from './SynergyItemCreateManyItemInputEnvelope.schema';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './SynergyItemUpdateWithWhereUniqueWithoutItemInput.schema';
import { SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema } from './SynergyItemUpdateManyWithWhereWithoutItemInput.schema';
import { SynergyItemScalarWhereInputObjectSchema } from './SynergyItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUncheckedUpdateManyWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SynergyItemCreateWithoutItemInputObjectSchema),
          z.lazy(() => SynergyItemCreateWithoutItemInputObjectSchema).array(),
          z.lazy(() => SynergyItemUncheckedCreateWithoutItemInputObjectSchema),
          z
            .lazy(() => SynergyItemUncheckedCreateWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SynergyItemCreateOrConnectWithoutItemInputObjectSchema),
          z
            .lazy(() => SynergyItemCreateOrConnectWithoutItemInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SynergyItemCreateManyItemInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema,
          ),
          z
            .lazy(
              () => SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SynergyItemScalarWhereInputObjectSchema),
          z.lazy(() => SynergyItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SynergyItemUncheckedUpdateManyWithoutItemNestedInputObjectSchema =
  Schema;
