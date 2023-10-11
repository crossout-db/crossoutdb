import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PackPriceScalarWhereInputObjectSchema),
        z.lazy(() => PackPriceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PackPriceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PackPriceScalarWhereInputObjectSchema),
        z.lazy(() => PackPriceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    packId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    timestamp: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    priceUSD: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    priceEUR: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    priceGBP: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    priceRUB: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    discount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PackPriceScalarWhereInputObjectSchema = Schema;
