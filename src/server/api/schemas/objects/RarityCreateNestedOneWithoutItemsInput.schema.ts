import { z } from 'zod';
import { RarityCreateWithoutItemsInputObjectSchema } from './RarityCreateWithoutItemsInput.schema';
import { RarityUncheckedCreateWithoutItemsInputObjectSchema } from './RarityUncheckedCreateWithoutItemsInput.schema';
import { RarityCreateOrConnectWithoutItemsInputObjectSchema } from './RarityCreateOrConnectWithoutItemsInput.schema';
import { RarityWhereUniqueInputObjectSchema } from './RarityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityCreateNestedOneWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RarityCreateWithoutItemsInputObjectSchema),
        z.lazy(() => RarityUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RarityCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RarityWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RarityCreateNestedOneWithoutItemsInputObjectSchema = Schema;
