import { z } from 'zod';
import { PackCreateWithoutPackPricesInputObjectSchema } from './PackCreateWithoutPackPricesInput.schema';
import { PackUncheckedCreateWithoutPackPricesInputObjectSchema } from './PackUncheckedCreateWithoutPackPricesInput.schema';
import { PackCreateOrConnectWithoutPackPricesInputObjectSchema } from './PackCreateOrConnectWithoutPackPricesInput.schema';
import { PackUpsertWithoutPackPricesInputObjectSchema } from './PackUpsertWithoutPackPricesInput.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackUpdateWithoutPackPricesInputObjectSchema } from './PackUpdateWithoutPackPricesInput.schema';
import { PackUncheckedUpdateWithoutPackPricesInputObjectSchema } from './PackUncheckedUpdateWithoutPackPricesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateOneRequiredWithoutPackPricesNestedInput> =
  z
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
      upsert: z
        .lazy(() => PackUpsertWithoutPackPricesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PackWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PackUpdateWithoutPackPricesInputObjectSchema),
          z.lazy(() => PackUncheckedUpdateWithoutPackPricesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PackUpdateOneRequiredWithoutPackPricesNestedInputObjectSchema =
  Schema;
