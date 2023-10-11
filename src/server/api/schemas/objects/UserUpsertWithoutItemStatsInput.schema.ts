import { z } from 'zod';
import { UserUpdateWithoutItemStatsInputObjectSchema } from './UserUpdateWithoutItemStatsInput.schema';
import { UserUncheckedUpdateWithoutItemStatsInputObjectSchema } from './UserUncheckedUpdateWithoutItemStatsInput.schema';
import { UserCreateWithoutItemStatsInputObjectSchema } from './UserCreateWithoutItemStatsInput.schema';
import { UserUncheckedCreateWithoutItemStatsInputObjectSchema } from './UserUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutItemStatsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutItemStatsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutItemStatsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutItemStatsInputObjectSchema = Schema;
