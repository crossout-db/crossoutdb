import { z } from 'zod';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseCreateWithoutPacksInputObjectSchema } from './ReleaseCreateWithoutPacksInput.schema';
import { ReleaseUncheckedCreateWithoutPacksInputObjectSchema } from './ReleaseUncheckedCreateWithoutPacksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateOrConnectWithoutPacksInput> = z
  .object({
    where: z.lazy(() => ReleaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutPacksInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutPacksInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseCreateOrConnectWithoutPacksInputObjectSchema = Schema;
