import { z } from 'zod';
import { UserCreateWithoutItemStatsInputObjectSchema } from './UserCreateWithoutItemStatsInput.schema';
import { UserUncheckedCreateWithoutItemStatsInputObjectSchema } from './UserUncheckedCreateWithoutItemStatsInput.schema';
import { UserCreateOrConnectWithoutItemStatsInputObjectSchema } from './UserCreateOrConnectWithoutItemStatsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutItemStatsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutItemStatsInputObjectSchema = Schema;
