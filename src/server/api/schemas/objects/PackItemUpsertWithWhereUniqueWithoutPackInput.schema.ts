import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithoutPackInputObjectSchema } from './PackItemUpdateWithoutPackInput.schema';
import { PackItemUncheckedUpdateWithoutPackInputObjectSchema } from './PackItemUncheckedUpdateWithoutPackInput.schema';
import { PackItemCreateWithoutPackInputObjectSchema } from './PackItemCreateWithoutPackInput.schema';
import { PackItemUncheckedCreateWithoutPackInputObjectSchema } from './PackItemUncheckedCreateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpsertWithWhereUniqueWithoutPackInput> =
  z
    .object({
      where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PackItemUpdateWithoutPackInputObjectSchema),
        z.lazy(() => PackItemUncheckedUpdateWithoutPackInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PackItemCreateWithoutPackInputObjectSchema),
        z.lazy(() => PackItemUncheckedCreateWithoutPackInputObjectSchema),
      ]),
    })
    .strict();

export const PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema = Schema;
