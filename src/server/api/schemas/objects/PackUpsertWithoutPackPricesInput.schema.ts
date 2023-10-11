import { z } from 'zod';
import { PackUpdateWithoutPackPricesInputObjectSchema } from './PackUpdateWithoutPackPricesInput.schema';
import { PackUncheckedUpdateWithoutPackPricesInputObjectSchema } from './PackUncheckedUpdateWithoutPackPricesInput.schema';
import { PackCreateWithoutPackPricesInputObjectSchema } from './PackCreateWithoutPackPricesInput.schema';
import { PackUncheckedCreateWithoutPackPricesInputObjectSchema } from './PackUncheckedCreateWithoutPackPricesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpsertWithoutPackPricesInput> = z
  .object({
    update: z.union([
      z.lazy(() => PackUpdateWithoutPackPricesInputObjectSchema),
      z.lazy(() => PackUncheckedUpdateWithoutPackPricesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PackCreateWithoutPackPricesInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutPackPricesInputObjectSchema),
    ]),
  })
  .strict();

export const PackUpsertWithoutPackPricesInputObjectSchema = Schema;
