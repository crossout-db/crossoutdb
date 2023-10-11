import { z } from 'zod';
import { SynergyWhereUniqueInputObjectSchema } from './SynergyWhereUniqueInput.schema';
import { SynergyCreateWithoutSynergyItemsInputObjectSchema } from './SynergyCreateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedCreateWithoutSynergyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyCreateOrConnectWithoutSynergyItemsInput> =
  z
    .object({
      where: z.lazy(() => SynergyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SynergyCreateWithoutSynergyItemsInputObjectSchema),
        z.lazy(
          () => SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SynergyCreateOrConnectWithoutSynergyItemsInputObjectSchema =
  Schema;
