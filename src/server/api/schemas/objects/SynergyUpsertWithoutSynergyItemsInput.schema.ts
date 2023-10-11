import { z } from 'zod';
import { SynergyUpdateWithoutSynergyItemsInputObjectSchema } from './SynergyUpdateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedUpdateWithoutSynergyItemsInput.schema';
import { SynergyCreateWithoutSynergyItemsInputObjectSchema } from './SynergyCreateWithoutSynergyItemsInput.schema';
import { SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema } from './SynergyUncheckedCreateWithoutSynergyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyUpsertWithoutSynergyItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SynergyUpdateWithoutSynergyItemsInputObjectSchema),
      z.lazy(() => SynergyUncheckedUpdateWithoutSynergyItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SynergyCreateWithoutSynergyItemsInputObjectSchema),
      z.lazy(() => SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema),
    ]),
  })
  .strict();

export const SynergyUpsertWithoutSynergyItemsInputObjectSchema = Schema;
