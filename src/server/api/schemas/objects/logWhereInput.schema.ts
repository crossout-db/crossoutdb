import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => logWhereInputObjectSchema),
        z.lazy(() => logWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => logWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => logWhereInputObjectSchema),
        z.lazy(() => logWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    timestamp: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tableChanged: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    recordId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    record: z.lazy(() => JsonFilterObjectSchema).optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const logWhereInputObjectSchema = Schema;
