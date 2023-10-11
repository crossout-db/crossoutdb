import { z } from 'zod';
import { ItemCreateNestedOneWithoutPackItemsInputObjectSchema } from './ItemCreateNestedOneWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateWithoutPackInput> = z
  .object({
    quantity: z.number(),
    item: z.lazy(() => ItemCreateNestedOneWithoutPackItemsInputObjectSchema),
  })
  .strict();

export const PackItemCreateWithoutPackInputObjectSchema = Schema;
