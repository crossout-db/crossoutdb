import { z } from 'zod';
import { ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema } from './ItemCreateNestedOneWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemCreateWithoutSynergyInput> = z
  .object({
    item: z.lazy(
      () => ItemCreateNestedOneWithoutItemSynergiesInputObjectSchema,
    ),
  })
  .strict();

export const SynergyItemCreateWithoutSynergyInputObjectSchema = Schema;
