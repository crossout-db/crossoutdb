import { z } from 'zod';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackCreateWithoutPackPricesInputObjectSchema } from './PackCreateWithoutPackPricesInput.schema';
import { PackUncheckedCreateWithoutPackPricesInputObjectSchema } from './PackUncheckedCreateWithoutPackPricesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateOrConnectWithoutPackPricesInput> = z
  .object({
    where: z.lazy(() => PackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackCreateWithoutPackPricesInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutPackPricesInputObjectSchema),
    ]),
  })
  .strict();

export const PackCreateOrConnectWithoutPackPricesInputObjectSchema = Schema;
