import { z } from 'zod';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { ItemStatsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ItemStatsUncheckedCreateNestedManyWithoutUserInput.schema';
import { logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './logUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    role: z.lazy(() => UserRoleSchema).optional(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    itemStats: z
      .lazy(
        () => ItemStatsUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    log: z
      .lazy(() => logUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
