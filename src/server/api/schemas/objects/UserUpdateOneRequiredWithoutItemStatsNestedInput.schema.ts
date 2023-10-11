import { z } from 'zod';
import { UserCreateWithoutItemStatsInputObjectSchema } from './UserCreateWithoutItemStatsInput.schema';
import { UserUncheckedCreateWithoutItemStatsInputObjectSchema } from './UserUncheckedCreateWithoutItemStatsInput.schema';
import { UserCreateOrConnectWithoutItemStatsInputObjectSchema } from './UserCreateOrConnectWithoutItemStatsInput.schema';
import { UserUpsertWithoutItemStatsInputObjectSchema } from './UserUpsertWithoutItemStatsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutItemStatsInputObjectSchema } from './UserUpdateWithoutItemStatsInput.schema';
import { UserUncheckedUpdateWithoutItemStatsInputObjectSchema } from './UserUncheckedUpdateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutItemStatsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutItemStatsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutItemStatsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutItemStatsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutItemStatsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutItemStatsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutItemStatsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutItemStatsNestedInputObjectSchema =
  Schema;
