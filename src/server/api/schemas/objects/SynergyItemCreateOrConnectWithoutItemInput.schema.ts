import { z } from 'zod';
import { SynergyItemWhereUniqueInputObjectSchema } from './SynergyItemWhereUniqueInput.schema';
import { SynergyItemCreateWithoutItemInputObjectSchema } from './SynergyItemCreateWithoutItemInput.schema';
import { SynergyItemUncheckedCreateWithoutItemInputObjectSchema } from './SynergyItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => SynergyItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SynergyItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => SynergyItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const SynergyItemCreateOrConnectWithoutItemInputObjectSchema = Schema;
