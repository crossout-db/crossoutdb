import { z } from 'zod';
import { PackItemScalarWhereInputObjectSchema } from './PackItemScalarWhereInput.schema';
import { PackItemUpdateManyMutationInputObjectSchema } from './PackItemUpdateManyMutationInput.schema';
import { PackItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './PackItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateManyWithWhereWithoutPackInput> = z
  .object({
    where: z.lazy(() => PackItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PackItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => PackItemUncheckedUpdateManyWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const PackItemUpdateManyWithWhereWithoutPackInputObjectSchema = Schema;
