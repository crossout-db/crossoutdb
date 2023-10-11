import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PackRelationFilterObjectSchema } from './PackRelationFilter.schema';
import { PackWhereInputObjectSchema } from './PackWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PackPriceWhereInputObjectSchema),
        z.lazy(() => PackPriceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PackPriceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PackPriceWhereInputObjectSchema),
        z.lazy(() => PackPriceWhereInputObjectSchema).array(),
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
    pack: z
      .union([
        z.lazy(() => PackRelationFilterObjectSchema),
        z.lazy(() => PackWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PackPriceWhereInputObjectSchema = Schema;
