import { z } from 'zod';
import { SynergyItemCreateWithoutItemInputObjectSchema } from './SynergyItemCreateWithoutItemInput.schema';
import { SynergyItemUncheckedCreateWithoutItemInputObjectSchema } from './SynergyItemUncheckedCreateWithoutItemInput.schema';
import { SynergyItemCreateOrConnectWithoutItemInputObjectSchema } from './SynergyItemCreateOrConnectWithoutItemInput.schema';
import { SynergyItemCreateManyItemInputEnvelopeObjectSchema } from './SynergyItemCreateManyItemInputEnvelope.schema';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateNestedManyWithoutItemInput> = z
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
    createMany: z
      .lazy(() => SynergyItemCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
        z.lazy(() => SynergyItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SynergyItemCreateNestedManyWithoutItemInputObjectSchema = Schema;
