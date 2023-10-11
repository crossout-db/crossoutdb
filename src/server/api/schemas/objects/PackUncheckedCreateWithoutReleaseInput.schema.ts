import { z } from 'zod';
import { PackItemUncheckedCreateNestedManyWithoutPackInputObjectSchema } from './PackItemUncheckedCreateNestedManyWithoutPackInput.schema';
import { PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateNestedManyWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUncheckedCreateWithoutReleaseInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    steamAppID: z.number(),
    key: z.string().optional().nullable(),
    coins: z.number(),
    active: z.boolean(),
    items: z
      .lazy(() => PackItemUncheckedCreateNestedManyWithoutPackInputObjectSchema)
      .optional(),
    packPrices: z
      .lazy(
        () => PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PackUncheckedCreateWithoutReleaseInputObjectSchema = Schema;
