import { z } from 'zod';
import { SynergyItemScalarWhereInputObjectSchema } from './SynergyItemScalarWhereInput.schema';
import { SynergyItemUpdateManyMutationInputObjectSchema } from './SynergyItemUpdateManyMutationInput.schema';
import { SynergyItemUncheckedUpdateManyWithoutItemSynergiesInputObjectSchema } from './SynergyItemUncheckedUpdateManyWithoutItemSynergiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateManyWithWhereWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SynergyItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SynergyItemUncheckedUpdateManyWithoutItemSynergiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SynergyItemUpdateManyWithWhereWithoutItemInputObjectSchema =
  Schema;
