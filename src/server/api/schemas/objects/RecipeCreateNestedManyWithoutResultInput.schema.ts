import { z } from 'zod';
import { RecipeCreateWithoutResultInputObjectSchema } from './RecipeCreateWithoutResultInput.schema';
import { RecipeUncheckedCreateWithoutResultInputObjectSchema } from './RecipeUncheckedCreateWithoutResultInput.schema';
import { RecipeCreateOrConnectWithoutResultInputObjectSchema } from './RecipeCreateOrConnectWithoutResultInput.schema';
import { RecipeCreateManyResultInputEnvelopeObjectSchema } from './RecipeCreateManyResultInputEnvelope.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeCreateNestedManyWithoutResultInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RecipeCreateWithoutResultInputObjectSchema),
        z.lazy(() => RecipeCreateWithoutResultInputObjectSchema).array(),
        z.lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema),
        z
          .lazy(() => RecipeUncheckedCreateWithoutResultInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RecipeCreateOrConnectWithoutResultInputObjectSchema),
        z
          .lazy(() => RecipeCreateOrConnectWithoutResultInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RecipeCreateManyResultInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RecipeWhereUniqueInputObjectSchema),
        z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RecipeCreateNestedManyWithoutResultInputObjectSchema = Schema;
