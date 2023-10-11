import { z } from 'zod';
import { ReleaseCreateNestedOneWithoutPacksInputObjectSchema } from './ReleaseCreateNestedOneWithoutPacksInput.schema';
import { PackItemCreateNestedManyWithoutPackInputObjectSchema } from './PackItemCreateNestedManyWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateWithoutPackPricesInput> = z
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
  })
  .strict();

export const PackCreateWithoutPackPricesInputObjectSchema = Schema;
