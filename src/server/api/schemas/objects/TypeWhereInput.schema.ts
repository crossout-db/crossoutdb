import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ItemListRelationFilterObjectSchema } from './ItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TypeWhereInputObjectSchema),
        z.lazy(() => TypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TypeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TypeWhereInputObjectSchema),
        z.lazy(() => TypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    items: z.lazy(() => ItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TypeWhereInputObjectSchema = Schema;
