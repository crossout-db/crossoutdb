import { z } from 'zod';
import { SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema } from './SynergyCreateNestedOneWithoutSynergyItemsInput.schema';
import { ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema } from './ItemCreateNestedOneWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateInput> = z
  .object({
    synergy: z.lazy(
      () => SynergyCreateNestedOneWithoutSynergyItemsInputObjectSchema,
    ),
    item: z.lazy(
      () => ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema,
    ),
  })
  .strict();

export const SynergyItemCreateInputObjectSchema = Schema;
