import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { PackRelationFilterObjectSchema } from './PackRelationFilter.schema';
import { PackWhereInputObjectSchema } from './PackWhereInput.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PackItemWhereInputObjectSchema),
        z.lazy(() => PackItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PackItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PackItemWhereInputObjectSchema),
        z.lazy(() => PackItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    packId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    itemId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    pack: z
      .union([
        z.lazy(() => PackRelationFilterObjectSchema),
        z.lazy(() => PackWhereInputObjectSchema),
      ])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PackItemWhereInputObjectSchema = Schema;
