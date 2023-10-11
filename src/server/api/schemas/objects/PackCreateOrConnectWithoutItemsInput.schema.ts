import { z } from 'zod';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackCreateWithoutItemsInputObjectSchema } from './PackCreateWithoutItemsInput.schema';
import { PackUncheckedCreateWithoutItemsInputObjectSchema } from './PackUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => PackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackCreateWithoutItemsInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const PackCreateOrConnectWithoutItemsInputObjectSchema = Schema;
