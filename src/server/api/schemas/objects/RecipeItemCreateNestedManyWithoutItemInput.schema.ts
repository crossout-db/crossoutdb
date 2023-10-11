import { z } from 'zod';
import { RecipeItemCreateWithoutItemInputObjectSchema } from './RecipeItemCreateWithoutItemInput.schema';
import { RecipeItemUncheckedCreateWithoutItemInputObjectSchema } from './RecipeItemUncheckedCreateWithoutItemInput.schema';
import { RecipeItemCreateOrConnectWithoutItemInputObjectSchema } from './RecipeItemCreateOrConnectWithoutItemInput.schema';
import { RecipeItemCreateManyItemInputEnvelopeObjectSchema } from './RecipeItemCreateManyItemInputEnvelope.schema';
import { RecipeItemWhereUniqueInputObjectSchema } from './RecipeItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecipeItemCreateNestedManyWithoutItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => RecipeItemCreateWithoutItemInputObjectSchema).array(),
        z.lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
        z
          .lazy(() => RecipeItemUncheckedCreateWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RecipeItemCreateOrConnectWithoutItemInputObjectSchema),
        z
          .lazy(() => RecipeItemCreateOrConnectWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RecipeItemCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RecipeItemWhereUniqueInputObjectSchema),
        z.lazy(() => RecipeItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RecipeItemCreateNestedManyWithoutItemInputObjectSchema = Schema;
