import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutLogInputObjectSchema } from './UserCreateNestedOneWithoutLogInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.logCreateInput> = z
  .object({
    timestamp: z.coerce.date().optional(),
    tableChanged: z.string(),
    recordId: z.number(),
    record: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    user: z.lazy(() => UserCreateNestedOneWithoutLogInputObjectSchema),
  })
  .strict();

export const logCreateInputObjectSchema = Schema;
