import { z } from 'zod';
import { UserCreateWithoutLogInputObjectSchema } from './UserCreateWithoutLogInput.schema';
import { UserUncheckedCreateWithoutLogInputObjectSchema } from './UserUncheckedCreateWithoutLogInput.schema';
import { UserCreateOrConnectWithoutLogInputObjectSchema } from './UserCreateOrConnectWithoutLogInput.schema';
import { UserUpsertWithoutLogInputObjectSchema } from './UserUpsertWithoutLogInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLogInputObjectSchema } from './UserUpdateWithoutLogInput.schema';
import { UserUncheckedUpdateWithoutLogInputObjectSchema } from './UserUncheckedUpdateWithoutLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLogNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutLogInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLogInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutLogInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutLogInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutLogInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLogInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutLogNestedInputObjectSchema = Schema;
