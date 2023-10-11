import { z } from 'zod';
import { PackCreateWithoutItemsInputObjectSchema } from './PackCreateWithoutItemsInput.schema';
import { PackUncheckedCreateWithoutItemsInputObjectSchema } from './PackUncheckedCreateWithoutItemsInput.schema';
import { PackCreateOrConnectWithoutItemsInputObjectSchema } from './PackCreateOrConnectWithoutItemsInput.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateNestedOneWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackCreateWithoutItemsInputObjectSchema),
        z.lazy(() => PackUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PackCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PackWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PackCreateNestedOneWithoutItemsInputObjectSchema = Schema;
