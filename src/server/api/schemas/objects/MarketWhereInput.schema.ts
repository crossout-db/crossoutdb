import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketWhereInputObjectSchema),
        z.lazy(() => MarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketWhereInputObjectSchema),
        z.lazy(() => MarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    itemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    marketDef: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sellPriceMin: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    sellOrders: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    buyPriceMax: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    buyOrders: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    craftCost: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    timestamp: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MarketWhereInputObjectSchema = Schema;
