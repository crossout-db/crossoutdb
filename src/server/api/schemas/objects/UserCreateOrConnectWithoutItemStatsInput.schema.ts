import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutItemStatsInputObjectSchema } from './UserCreateWithoutItemStatsInput.schema';
import { UserUncheckedCreateWithoutItemStatsInputObjectSchema } from './UserUncheckedCreateWithoutItemStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutItemStatsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutItemStatsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutItemStatsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutItemStatsInputObjectSchema = Schema;
