import { z } from 'zod';
import { FactionWhereUniqueInputObjectSchema } from './FactionWhereUniqueInput.schema';
import { FactionCreateWithoutItemsInputObjectSchema } from './FactionCreateWithoutItemsInput.schema';
import { FactionUncheckedCreateWithoutItemsInputObjectSchema } from './FactionUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FactionCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => FactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FactionCreateWithoutItemsInputObjectSchema),
      z.lazy(() => FactionUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const FactionCreateOrConnectWithoutItemsInputObjectSchema = Schema;
