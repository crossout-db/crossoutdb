import { z } from 'zod';
import { UserUpdateWithoutLogInputObjectSchema } from './UserUpdateWithoutLogInput.schema';
import { UserUncheckedUpdateWithoutLogInputObjectSchema } from './UserUncheckedUpdateWithoutLogInput.schema';
import { UserCreateWithoutLogInputObjectSchema } from './UserCreateWithoutLogInput.schema';
import { UserUncheckedCreateWithoutLogInputObjectSchema } from './UserUncheckedCreateWithoutLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutLogInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutLogInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLogInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutLogInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLogInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutLogInputObjectSchema = Schema;
