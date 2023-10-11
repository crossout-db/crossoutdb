import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemUpdateWithoutSynergyInputObjectSchema } from './SynergyItemUpdateWithoutSynergyInput.schema';
import { SynergyItemUncheckedUpdateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedUpdateWithoutSynergyInput.schema';
import { SynergyItemCreateWithoutSynergyInputObjectSchema } from './SynergyItemCreateWithoutSynergyInput.schema';
import { SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema } from './SynergyItemUncheckedCreateWithoutSynergyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpsertWithWhereUniqueWithoutSynergyInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SynergyItemUpdateWithoutSynergyInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedUpdateWithoutSynergyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SynergyItemCreateWithoutSynergyInputObjectSchema),
        z.lazy(() => SynergyItemUncheckedCreateWithoutSynergyInputObjectSchema),
      ]),
    })
    .strict();

export const SynergyItemUpsertWithWhereUniqueWithoutSynergyInputObjectSchema =
  Schema;
