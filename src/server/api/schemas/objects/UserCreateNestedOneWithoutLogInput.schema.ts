import { z } from 'zod';
import { UserCreateWithoutLogInputObjectSchema } from './UserCreateWithoutLogInput.schema';
import { UserUncheckedCreateWithoutLogInputObjectSchema } from './UserUncheckedCreateWithoutLogInput.schema';
import { UserCreateOrConnectWithoutLogInputObjectSchema } from './UserCreateOrConnectWithoutLogInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutLogInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutLogInputObjectSchema = Schema;
