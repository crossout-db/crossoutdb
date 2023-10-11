import { z } from 'zod';
import { SynergyItemCreateWithoutSynergyInputObjectSchema } from './SynergyItemCreateWithoutSynergyInput.schema';
import { SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedCreateWithoutSynergyInput.schema';
import { SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema } from './SynergyItemCreateOrConnectWithoutSynergyInput.schema';
import { SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema } from './SynergyItemUpsertWithWhereUniqueWithoutSynergyInput.schema';
import { SynergyItemCreateManySynergyInputEnvelopeObjectSchema } from './SynergyItemCreateManySynergyInputEnvelope.schema';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema } from './SynergyItemUpdateWithWhereUniqueWithoutSynergyInput.schema';
import { SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema } from './SynergyItemUpdateManyWithWhereWithoutSynergyInput.schema';
import { SynergyItemScalarWhereInputObjectSchema } from './SynergyItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateManyWithoutSynergyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SynergyItemCreateWithoutSynergyInputObjectSchema),
          z
            .lazy(() => SynergyItemCreateWithoutSynergyInputObjectSchema)
            .array(),
          z.lazy(
            () => SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema,
          ),
          z
            .lazy(
              () => SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema,
          ),
          z
            .lazy(
              () => SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SynergyItemCreateManySynergyInputEnvelopeObjectSchema)
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
            () =>
              SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema,
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

export const SynergyItemUpdateManyWithoutSynergyNestedInputObjectSchema =
  Schema;
