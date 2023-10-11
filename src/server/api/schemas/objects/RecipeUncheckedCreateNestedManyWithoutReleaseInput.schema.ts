import { z } from 'zod';
import { RecipeCreateWithoutReleaseInputObjectSchema } from './RecipeCreateWithoutReleaseInput.schema';
import { RecipeUncheckedCreateWithoutReleaseInputObjectSchema } from './RecipeUncheckedCreateWithoutReleaseInput.schema';
import { RecipeCreateOrConnectWithoutReleaseInputObjectSchema } from './RecipeCreateOrConnectWithoutReleaseInput.schema';
import { RecipeCreateManyReleaseInputEnvelopeObjectSchema } from './RecipeCreateManyReleaseInputEnvelope.schema';
import { RecipeWhereUniqueInputObjectSchema } from './RecipeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeUncheckedCreateNestedManyWithoutReleaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema),
          z.lazy(() => RecipeCreateWithoutReleaseInputObjectSchema).array(),
          z.lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema),
          z
            .lazy(() => RecipeUncheckedCreateWithoutReleaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RecipeCreateOrConnectWithoutReleaseInputObjectSchema),
          z
            .lazy(() => RecipeCreateOrConnectWithoutReleaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecipeCreateManyReleaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecipeWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecipeUncheckedCreateNestedManyWithoutReleaseInputObjectSchema =
  Schema;
