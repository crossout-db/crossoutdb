import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ItemListRelationFilterObjectSchema } from './ItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RarityWhereInputObjectSchema),
        z.lazy(() => RarityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RarityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RarityWhereInputObjectSchema),
        z.lazy(() => RarityWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    primaryColor: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondaryColor: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    items: z.lazy(() => ItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RarityWhereInputObjectSchema = Schema;
