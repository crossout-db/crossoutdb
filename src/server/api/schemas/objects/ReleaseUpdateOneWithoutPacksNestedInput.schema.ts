import { z } from 'zod';
import { ReleaseCreateWithoutPacksInputObjectSchema } from './ReleaseCreateWithoutPacksInput.schema';
import { ReleaseUncheckedCreateWithoutPacksInputObjectSchema } from './ReleaseUncheckedCreateWithoutPacksInput.schema';
import { ReleaseCreateOrConnectWithoutPacksInputObjectSchema } from './ReleaseCreateOrConnectWithoutPacksInput.schema';
import { ReleaseUpsertWithoutPacksInputObjectSchema } from './ReleaseUpsertWithoutPacksInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseUpdateWithoutPacksInputObjectSchema } from './ReleaseUpdateWithoutPacksInput.schema';
import { ReleaseUncheckedUpdateWithoutPacksInputObjectSchema } from './ReleaseUncheckedUpdateWithoutPacksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpdateOneWithoutPacksNestedInput> = z
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
    upsert: z.lazy(() => ReleaseUpsertWithoutPacksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ReleaseUpdateWithoutPacksInputObjectSchema),
        z.lazy(() => ReleaseUncheckedUpdateWithoutPacksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReleaseUpdateOneWithoutPacksNestedInputObjectSchema = Schema;
