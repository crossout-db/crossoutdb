import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ItemListRelationFilterObjectSchema } from './ItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FactionWhereInputObjectSchema),
        z.lazy(() => FactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FactionWhereInputObjectSchema),
        z.lazy(() => FactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    items: z.lazy(() => ItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const FactionWhereInputObjectSchema = Schema;
