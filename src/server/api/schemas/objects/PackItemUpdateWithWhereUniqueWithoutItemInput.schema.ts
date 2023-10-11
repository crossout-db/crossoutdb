import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithoutItemInputObjectSchema } from './PackItemUpdateWithoutItemInput.schema';
import { PackItemUncheckedUpdateWithoutItemInputObjectSchema } from './PackItemUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateWithWhereUniqueWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PackItemUpdateWithoutItemInputObjectSchema),
        z.lazy(() => PackItemUncheckedUpdateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const PackItemUpdateWithWhereUniqueWithoutItemInputObjectSchema = Schema;
