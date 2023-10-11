import { z } from 'zod';
import { TypeCreateWithoutItemsInputObjectSchema } from './TypeCreateWithoutItemsInput.schema';
import { TypeUncheckedCreateWithoutItemsInputObjectSchema } from './TypeUncheckedCreateWithoutItemsInput.schema';
import { TypeCreateOrConnectWithoutItemsInputObjectSchema } from './TypeCreateOrConnectWithoutItemsInput.schema';
import { TypeWhereUniqueInputObjectSchema } from './TypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => TypeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TypeCreateNestedOneWithoutItemsInputObjectSchema = Schema;
