import { z } from 'zod';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackUpdateWithoutReleaseInputObjectSchema } from './PackUpdateWithoutReleaseInput.schema';
import { PackUncheckedUpdateWithoutReleaseInputObjectSchema } from './PackUncheckedUpdateWithoutReleaseInput.schema';
import { PackCreateWithoutReleaseInputObjectSchema } from './PackCreateWithoutReleaseInput.schema';
import { PackUncheckedCreateWithoutReleaseInputObjectSchema } from './PackUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpsertWithWhereUniqueWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => PackWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PackUpdateWithoutReleaseInputObjectSchema),
      z.lazy(() => PackUncheckedUpdateWithoutReleaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PackCreateWithoutReleaseInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutReleaseInputObjectSchema),
    ]),
  })
  .strict();

export const PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema = Schema;
