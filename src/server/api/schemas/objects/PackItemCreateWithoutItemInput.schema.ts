import { z } from 'zod';
import { PackCreateNestedOneWithoutItemsInputObjectSchema } from './PackCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateWithoutItemInput> = z
  .object({
    quantity: z.number(),
    pack: z.lazy(() => PackCreateNestedOneWithoutItemsInputObjectSchema),
  })
  .strict();

export const PackItemCreateWithoutItemInputObjectSchema = Schema;
