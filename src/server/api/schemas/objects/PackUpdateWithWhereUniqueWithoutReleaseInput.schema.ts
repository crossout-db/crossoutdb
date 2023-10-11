import { z } from 'zod';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackUpdateWithoutReleaseInputObjectSchema } from './PackUpdateWithoutReleaseInput.schema';
import { PackUncheckedUpdateWithoutReleaseInputObjectSchema } from './PackUncheckedUpdateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateWithWhereUniqueWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => PackWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PackUpdateWithoutReleaseInputObjectSchema),
      z.lazy(() => PackUncheckedUpdateWithoutReleaseInputObjectSchema),
    ]),
  })
  .strict();

export const PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema = Schema;
