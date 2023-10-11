import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithoutItemInputObjectSchema } from './SynergyItemUpdateWithoutItemInput.schema';
import { SynergyItemUncheckedUpdateWithoutItemInputObjectSchema } from './SynergyItemUncheckedUpdateWithoutItemInput.schema';
import { SynergyItemCreateWithoutItemInputObjectSchema } from './SynergyItemCreateWithoutItemInput.schema';
import { SynergyItemUncheckedCreateWithoutItemInputObjectSchema } from './SynergyItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SynergyItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SynergyItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const SynergyItemUpsertWithWhereUniqueWithoutItemInputObjectSchema =
  Schema;
