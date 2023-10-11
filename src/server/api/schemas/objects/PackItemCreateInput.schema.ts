import { z } from 'zod';
import { PackCreateNestedOneWithoutItemsInputObjectSchema } from './PackCreateNestedOneWithoutItemsInput.schema';
import { ItemCreateNestedOneWithoutPackItemsInputObjectSchema } from './ItemCreateNestedOneWithoutPackItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateInput> = z
  .object({
    quantity: z.number(),
    pack: z.lazy(() => PackCreateNestedOneWithoutItemsInputObjectSchema),
    item: z.lazy(() => ItemCreateNestedOneWithoutPackItemsInputObjectSchema),
  })
  .strict();

export const PackItemCreateInputObjectSchema = Schema;
