import { z } from 'zod';
import { PackPriceWhereUniqueInputObjectSchema } from './PackPriceWhereUniqueInput.schema';
import { PackPriceCreateWithoutPackInputObjectSchema } from './PackPriceCreateWithoutPackInput.schema';
import { PackPriceUncheckedCreateWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateOrConnectWithoutPackInput> = z
  .object({
    where: z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackPriceCreateWithoutPackInputObjectSchema),
      z.lazy(() => PackPriceUncheckedCreateWithoutPackInputObjectSchema),
    ]),
  })
  .strict();

export const PackPriceCreateOrConnectWithoutPackInputObjectSchema = Schema;
