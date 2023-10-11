import { z } from 'zod';
import { SynergyCreateWithoutSynergyItemsInputObjectSchema } from './SynergyCreateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedCreateWithoutSynergyItemsInput.schema';
import { SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema } from './SynergyCreateOrConnectWithoutSynergyItemsInput.schema';
import { SynergyWhereUniqueInputObjectSchema } from './SynergyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyCreateNestedOneWithoutSynergyItemsInput> =
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
      connect: z.lazy(() => SynergyWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema =
  Schema;
