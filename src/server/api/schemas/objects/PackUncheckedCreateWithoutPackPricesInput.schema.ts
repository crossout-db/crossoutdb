import { z } from 'zod';
import { PackItemUncheckedCreateNestedManyWithoutPackInputObjectSchema } from './PackItemUncheckedCreateNestedManyWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUncheckedCreateWithoutPackPricesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    steamAppID: z.number(),
    key: z.string().optional().nullable(),
    coins: z.number(),
    releaseId: z.number().optional().nullable(),
    active: z.boolean(),
    items: z
      .lazy(() => PackItemUncheckedCreateNestedManyWithoutPackInputObjectSchema)
      .optional(),
  })
  .strict();

export const PackUncheckedCreateWithoutPackPricesInputObjectSchema = Schema;
