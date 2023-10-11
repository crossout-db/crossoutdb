import { z } from 'zod';
import { SynergyItemCreateWithoutSynergyInputObjectSchema } from './SynergyItemCreateWithoutSynergyInput.schema';
import { SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedCreateWithoutSynergyInput.schema';
import { SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema } from './SynergyItemCreateOrConnectWithoutSynergyInput.schema';
import { SynergyItemCreateManySynergyInputEnvelopeObjectSchema } from './SynergyItemCreateManySynergyInputEnvelope.schema';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUncheckedCreateNestedManyWithoutSynergyInput> =
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
      createMany: z
        .lazy(() => SynergyItemCreateManySynergyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
          z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SynergyItemUncheckedCreateNestedManyWithoutSynergyInputObjectSchema =
  Schema;
