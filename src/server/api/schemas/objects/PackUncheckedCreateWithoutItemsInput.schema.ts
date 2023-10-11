import { z } from 'zod';
import { PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateNestedManyWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    steamAppID: z.number(),
    key: z.string().optional().nullable(),
    coins: z.number(),
    releaseId: z.number().optional().nullable(),
    active: z.boolean(),
    packPrices: z
      .lazy(
        () => PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PackUncheckedCreateWithoutItemsInputObjectSchema = Schema;
