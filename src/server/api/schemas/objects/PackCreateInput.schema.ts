import { z } from 'zod';
import { ReleaseCreateNestedOneWithoutPacksInputObjectSchema } from './ReleaseCreateNestedOneWithoutPacksInput.schema';
import { PackItemCreateNestedManyWithoutPackInputObjectSchema } from './PackItemCreateNestedManyWithoutPackInput.schema';
import { PackPriceCreateNestedManyWithoutPackInputObjectSchema } from './PackPriceCreateNestedManyWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    steamAppID: z.number(),
    key: z.string().optional().nullable(),
    coins: z.number(),
    active: z.boolean(),
    release: z
      .lazy(() => ReleaseCreateNestedOneWithoutPacksInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => PackItemCreateNestedManyWithoutPackInputObjectSchema)
      .optional(),
    packPrices: z
      .lazy(() => PackPriceCreateNestedManyWithoutPackInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackCreateInputObjectSchema = Schema;
