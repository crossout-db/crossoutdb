import { z } from 'zod';
import { PackCreateWithoutPackPricesInputObjectSchema } from './PackCreateWithoutPackPricesInput.schema';
import { PackUncheckedCreateWithoutPackPricesInputObjectSchema } from './PackUncheckedCreateWithoutPackPricesInput.schema';
import { PackCreateOrConnectWithoutPackPricesInputObjectSchema } from './PackCreateOrConnectWithoutPackPricesInput.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateNestedOneWithoutPackPricesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackCreateWithoutPackPricesInputObjectSchema),
        z.lazy(() => PackUncheckedCreateWithoutPackPricesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PackCreateOrConnectWithoutPackPricesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PackWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PackCreateNestedOneWithoutPackPricesInputObjectSchema = Schema;
