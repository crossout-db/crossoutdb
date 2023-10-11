import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemCreateWithoutItemInputObjectSchema } from './PackItemCreateWithoutItemInput.schema';
import { PackItemUncheckedCreateWithoutItemInputObjectSchema } from './PackItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateOrConnectWithoutItemInput> = z
  .object({
    where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const PackItemCreateOrConnectWithoutItemInputObjectSchema = Schema;
