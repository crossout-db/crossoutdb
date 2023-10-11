import { z } from 'zod';
import { SynergyItemScalarWhereInputObjectSchema } from './SynergyItemScalarWhereInput.schema';
import { SynergyItemUpdateManyMutationInputObjectSchema } from './SynergyItemUpdateManyMutationInput.schema';
import { SynergyItemUncheckedUpdateManyWithoutSynergyItemsInputObjectSchema } from './SynergyItemUncheckedUpdateManyWithoutSynergyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SynergyItemUpdateManyWithWhereWithoutSynergyInput> =
  z
    .object({
      where: z.lazy(() => SynergyItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SynergyItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SynergyItemUncheckedUpdateManyWithoutSynergyItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SynergyItemUpdateManyWithWhereWithoutSynergyInputObjectSchema =
  Schema;
