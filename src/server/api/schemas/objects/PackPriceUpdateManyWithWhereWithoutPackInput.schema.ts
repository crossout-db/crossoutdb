import { z } from 'zod';
import { PackPriceScalarWhereInputObjectSchema } from './PackPriceScalarWhereInput.schema';
import { PackPriceUpdateManyMutationInputObjectSchema } from './PackPriceUpdateManyMutationInput.schema';
import { PackPriceUncheckedUpdateManyWithoutPackPricesInputObjectSchema } from './PackPriceUncheckedUpdateManyWithoutPackPricesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceUpdateManyWithWhereWithoutPackInput> = z
  .object({
    where: z.lazy(() => PackPriceScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PackPriceUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => PackPriceUncheckedUpdateManyWithoutPackPricesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema = Schema;
