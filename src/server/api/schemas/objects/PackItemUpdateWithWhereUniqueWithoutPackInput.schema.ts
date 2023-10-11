import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithoutPackInputObjectSchema } from './PackItemUpdateWithoutPackInput.schema';
import { PackItemUncheckedUpdateWithoutPackInputObjectSchema } from './PackItemUncheckedUpdateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateWithWhereUniqueWithoutPackInput> =
  z
    .object({
      where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PackItemUpdateWithoutPackInputObjectSchema),
        z.lazy(() => PackItemUncheckedUpdateWithoutPackInputObjectSchema),
      ]),
    })
    .strict();

export const PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema = Schema;
