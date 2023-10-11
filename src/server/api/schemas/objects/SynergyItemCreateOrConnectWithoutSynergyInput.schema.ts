import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemCreateWithoutSynergyInputObjectSchema } from './SynergyItemCreateWithoutSynergyInput.schema';
import { SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedCreateWithoutSynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateOrConnectWithoutSynergyInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SynergyItemCreateWithoutSynergyInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema),
      ]),
    })
    .strict();

export const SynergyItemCreateOrConnectWithoutSynergyInputObjectSchema = Schema;
