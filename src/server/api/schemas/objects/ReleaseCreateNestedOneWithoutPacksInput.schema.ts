import { z } from 'zod';
import { ReleaseCreateWithoutPacksInputObjectSchema } from './ReleaseCreateWithoutPacksInput.schema';
import { ReleaseUncheckedCreateWithoutPacksInputObjectSchema } from './ReleaseUncheckedCreateWithoutPacksInput.schema';
import { ReleaseCreateOrConnectWithoutPacksInputObjectSchema } from './ReleaseCreateOrConnectWithoutPacksInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateNestedOneWithoutPacksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReleaseCreateWithoutPacksInputObjectSchema),
        z.lazy(() => ReleaseUncheckedCreateWithoutPacksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ReleaseCreateOrConnectWithoutPacksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ReleaseCreateNestedOneWithoutPacksInputObjectSchema = Schema;
