import { z } from 'zod';
import { PackPriceWhereUniqueInputObjectSchema } from './PackPriceWhereUniqueInput.schema';
import { PackPriceUpdateWithoutPackInputObjectSchema } from './PackPriceUpdateWithoutPackInput.schema';
import { PackPriceUncheckedUpdateWithoutPackInputObjectSchema } from './PackPriceUncheckedUpdateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceUpdateWithWhereUniqueWithoutPackInput> =
  z
    .object({
      where: z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PackPriceUpdateWithoutPackInputObjectSchema),
        z.lazy(() => PackPriceUncheckedUpdateWithoutPackInputObjectSchema),
      ]),
    })
    .strict();

export const PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema =
  Schema;
