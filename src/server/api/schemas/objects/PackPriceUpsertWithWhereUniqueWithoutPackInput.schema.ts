import { z } from 'zod';
import { PackPriceWhereUniqueInputObjectSchema } from './PackPriceWhereUniqueInput.schema';
import { PackPriceUpdateWithoutPackInputObjectSchema } from './PackPriceUpdateWithoutPackInput.schema';
import { PackPriceUncheckedUpdateWithoutPackInputObjectSchema } from './PackPriceUncheckedUpdateWithoutPackInput.schema';
import { PackPriceCreateWithoutPackInputObjectSchema } from './PackPriceCreateWithoutPackInput.schema';
import { PackPriceUncheckedCreateWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceUpsertWithWhereUniqueWithoutPackInput> =
  z
    .object({
      where: z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PackPriceUpdateWithoutPackInputObjectSchema),
        z.lazy(() => PackPriceUncheckedUpdateWithoutPackInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PackPriceCreateWithoutPackInputObjectSchema),
        z.lazy(() => PackPriceUncheckedCreateWithoutPackInputObjectSchema),
      ]),
    })
    .strict();

export const PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema =
  Schema;
