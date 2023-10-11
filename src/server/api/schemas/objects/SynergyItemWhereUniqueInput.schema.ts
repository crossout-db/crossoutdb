import { z } from 'zod';
import { SynergyItemSynergyIdItemIdCompoundUniqueInputObjectSchema } from './SynergyItemSynergyIdItemIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemWhereUniqueInput> = z
  .object({
    synergyId_itemId: z
      .lazy(() => SynergyItemSynergyIdItemIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SynergyItemWhereUniqueInputObjectSchema = Schema;
