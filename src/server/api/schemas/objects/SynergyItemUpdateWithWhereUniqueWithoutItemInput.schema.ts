import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithoutItemInputObjectSchema } from './SynergyItemUpdateWithoutItemInput.schema';
import { SynergyItemUncheckedUpdateWithoutItemInputObjectSchema } from './SynergyItemUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SynergyItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const SynergyItemUpdateWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
