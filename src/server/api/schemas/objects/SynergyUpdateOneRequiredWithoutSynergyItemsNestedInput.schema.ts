import { z } from 'zod';
import { SynergyCreateWithoutSynergyItemsInputObjectSchema } from './SynergyCreateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedCreateWithoutSynergyItemsInput.schema';
import { SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema } from './SynergyCreateOrConnectWithoutSynergyItemsInput.schema';
import { SynergyUpsertWithoutSynergyItemsInputObjectSchema } from './SynergyUpsertWithoutSynergyItemsInput.schema';
import { SynergyWhereUniqueInputObjectSchema } from './SynergyWhereUniqueInput.schema';
import { SynergyUpdateWithoutSynergyItemsInputObjectSchema } from './SynergyUpdateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedUpdateWithoutSynergyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyUpdateOneRequiredWithoutSynergyItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SynergyCreateWithoutSynergyItemsInputObjectSchema),
          z.lazy(
            () => SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SynergyUpsertWithoutSynergyItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SynergyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SynergyUpdateWithoutSynergyItemsInputObjectSchema),
          z.lazy(
            () => SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SynergyUpdateOneRequiredWithoutSynergyItemsNestedInputObjectSchema =
  Schema;
