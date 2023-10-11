import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ReleaseRelationFilterObjectSchema } from './ReleaseRelationFilter.schema';
import { ReleaseWhereInputObjectSchema } from './ReleaseWhereInput.schema';
import { PackItemListRelationFilterObjectSchema } from './PackItemListRelationFilter.schema';
import { PackPriceListRelationFilterObjectSchema } from './PackPriceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PackWhereInputObjectSchema),
        z.lazy(() => PackWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PackWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PackWhereInputObjectSchema),
        z.lazy(() => PackWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    steamAppID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    key: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    coins: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    releaseId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    active: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    release: z
      .union([
        z.lazy(() => ReleaseRelationFilterObjectSchema),
        z.lazy(() => ReleaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    items: z.lazy(() => PackItemListRelationFilterObjectSchema).optional(),
    packPrices: z
      .lazy(() => PackPriceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PackWhereInputObjectSchema = Schema;
