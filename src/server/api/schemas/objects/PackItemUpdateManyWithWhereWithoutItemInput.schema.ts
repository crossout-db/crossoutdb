import { z } from 'zod';
import { PackItemScalarWhereInputObjectSchema } from './PackItemScalarWhereInput.schema';
import { PackItemUpdateManyMutationInputObjectSchema } from './PackItemUpdateManyMutationInput.schema';
import { PackItemUncheckedUpdateManyWithoutPackItemsInputObjectSchema } from './PackItemUncheckedUpdateManyWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateManyWithWhereWithoutItemInput> = z
  .object({
    where: z.lazy(() => PackItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PackItemUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => PackItemUncheckedUpdateManyWithoutPackItemsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PackItemUpdateManyWithWhereWithoutItemInputObjectSchema = Schema;
