import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLogInputObjectSchema } from './UserCreateWithoutLogInput.schema';
import { UserUncheckedCreateWithoutLogInputObjectSchema } from './UserUncheckedCreateWithoutLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutLogInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutLogInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLogInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutLogInputObjectSchema = Schema;
