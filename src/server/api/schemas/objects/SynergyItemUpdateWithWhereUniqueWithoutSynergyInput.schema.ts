import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithoutSynergyInputObjectSchema } from './SynergyItemUpdateWithoutSynergyInput.schema';
import { SynergyItemUncheckedUpdateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedUpdateWithoutSynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateWithWhereUniqueWithoutSynergyInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SynergyItemUpdateWithoutSynergyInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedUpdateWithoutSynergyInputObjectSchema),
      ]),
    })
    .strict();

export const SynergyItemUpdateWithWhereUniqueWithoutSynergyInputObjectSchema =
  Schema;
