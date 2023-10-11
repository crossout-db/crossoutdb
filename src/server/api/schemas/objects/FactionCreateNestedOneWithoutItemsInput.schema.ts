import { z } from 'zod';
import { FactionCreateWithoutItemsInputObjectSchema } from './FactionCreateWithoutItemsInput.schema';
import { FactionUncheckedCreateWithoutItemsInputObjectSchema } from './FactionUncheckedCreateWithoutItemsInput.schema';
import { FactionCreateOrConnectWithoutItemsInputObjectSchema } from './FactionCreateOrConnectWithoutItemsInput.schema';
import { FactionWhereUniqueInputObjectSchema } from './FactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionCreateNestedOneWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FactionCreateWithoutItemsInputObjectSchema),
        z.lazy(() => FactionUncheckedCreateWithoutItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FactionCreateOrConnectWithoutItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => FactionWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const FactionCreateNestedOneWithoutItemsInputObjectSchema = Schema;
