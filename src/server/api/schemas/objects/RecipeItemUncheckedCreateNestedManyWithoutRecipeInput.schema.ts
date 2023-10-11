import { z } from 'zod';
import { RecipeItemCreateWithoutRecipeInputObjectSchema } from './RecipeItemCreateWithoutRecipeInput.schema';
import { RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema } from './RecipeItemUncheckedCreateWithoutRecipeInput.schema';
import { RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema } from './RecipeItemCreateOrConnectWithoutRecipeInput.schema';
import { RecipeItemCreateManyRecipeInputEnvelopeObjectSchema } from './RecipeItemCreateManyRecipeInputEnvelope.schema';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemUncheckedCreateNestedManyWithoutRecipeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema),
          z.lazy(() => RecipeItemCreateWithoutRecipeInputObjectSchema).array(),
          z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
          z
            .lazy(() => RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema),
          z
            .lazy(() => RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RecipeItemCreateManyRecipeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
          z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RecipeItemUncheckedCreateNestedManyWithoutRecipeInputObjectSchema =
  Schema;
