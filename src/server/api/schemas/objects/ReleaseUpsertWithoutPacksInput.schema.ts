import { z } from 'zod';
import { ReleaseUpdateWithoutPacksInputObjectSchema } from './ReleaseUpdateWithoutPacksInput.schema';
import { ReleaseUncheckedUpdateWithoutPacksInputObjectSchema } from './ReleaseUncheckedUpdateWithoutPacksInput.schema';
import { ReleaseCreateWithoutPacksInputObjectSchema } from './ReleaseCreateWithoutPacksInput.schema';
import { ReleaseUncheckedCreateWithoutPacksInputObjectSchema } from './ReleaseUncheckedCreateWithoutPacksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpsertWithoutPacksInput> = z
  .object({
    update: z.union([
      z.lazy(() => ReleaseUpdateWithoutPacksInputObjectSchema),
      z.lazy(() => ReleaseUncheckedUpdateWithoutPacksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutPacksInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutPacksInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseUpsertWithoutPacksInputObjectSchema = Schema;
