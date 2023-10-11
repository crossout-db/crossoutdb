import { z } from 'zod';
import { RarityWhereUniqueInputObjectSchema } from './RarityWhereUniqueInput.schema';
import { RarityCreateWithoutItemsInputObjectSchema } from './RarityCreateWithoutItemsInput.schema';
import { RarityUncheckedCreateWithoutItemsInputObjectSchema } from './RarityUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RarityCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => RarityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RarityCreateWithoutItemsInputObjectSchema),
      z.lazy(() => RarityUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const RarityCreateOrConnectWithoutItemsInputObjectSchema = Schema;
