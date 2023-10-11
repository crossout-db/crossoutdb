import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithoutItemInputObjectSchema } from './PackItemUpdateWithoutItemInput.schema';
import { PackItemUncheckedUpdateWithoutItemInputObjectSchema } from './PackItemUncheckedUpdateWithoutItemInput.schema';
import { PackItemCreateWithoutItemInputObjectSchema } from './PackItemCreateWithoutItemInput.schema';
import { PackItemUncheckedCreateWithoutItemInputObjectSchema } from './PackItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpsertWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PackItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => PackItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PackItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const PackItemUpsertWithWhereUniqueWithoutItemInputObjectSchema = Schema;
