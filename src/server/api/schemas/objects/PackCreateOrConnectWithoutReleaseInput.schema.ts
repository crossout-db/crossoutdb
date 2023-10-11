import { z } from 'zod';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackCreateWithoutReleaseInputObjectSchema } from './PackCreateWithoutReleaseInput.schema';
import { PackUncheckedCreateWithoutReleaseInputObjectSchema } from './PackUncheckedCreateWithoutReleaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackCreateOrConnectWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => PackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackCreateWithoutReleaseInputObjectSchema),
      z.lazy(() => PackUncheckedCreateWithoutReleaseInputObjectSchema),
    ]),
  })
  .strict();

export const PackCreateOrConnectWithoutReleaseInputObjectSchema = Schema;
