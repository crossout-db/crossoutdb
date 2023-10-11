import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.logCreateManyUserInput> = z
  .object({
    id: z.number().optional(),
    timestamp: z.coerce.date().optional(),
    tableChanged: z.string(),
    recordId: z.number(),
    record: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
  })
  .strict();

export const logCreateManyUserInputObjectSchema = Schema;
