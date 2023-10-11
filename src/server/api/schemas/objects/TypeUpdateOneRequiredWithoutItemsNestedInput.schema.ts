import { z } from 'zod';
import { TypeCreateWithoutItemsInputObjectSchema } from './TypeCreateWithoutItemsInput.schema';
import { TypeUncheckedCreateWithoutItemsInputObjectSchema } from './TypeUncheckedCreateWithoutItemsInput.schema';
import { TypeCreateOrConnectWithoutItemsInputObjectSchema } from './TypeCreateOrConnectWithoutItemsInput.schema';
import { TypeUpsertWithoutItemsInputObjectSchema } from './TypeUpsertWithoutItemsInput.schema';
import { TypeWhereUniqueInputObjectSchema } from './TypeWhereUniqueInput.schema';
import { TypeUpdateWithoutItemsInputObjectSchema } from './TypeUpdateWithoutItemsInput.schema';
import { TypeUncheckedUpdateWithoutItemsInputObjectSchema } from './TypeUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeUpdateOneRequiredWithoutItemsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TypeCreateWithoutItemsInputObjectSchema),
        z.lazy(() => TypeUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TypeCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => TypeUpsertWithoutItemsInputObjectSchema).optional(),
    connect: z.lazy(() => TypeWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TypeUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => TypeUncheckedUpdateWithoutItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TypeUpdateOneRequiredWithoutItemsNestedInputObjectSchema = Schema;
