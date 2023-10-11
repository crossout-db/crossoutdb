import { z } from 'zod';
import { BadgeExchangeScalarWhereInputObjectSchema } from './BadgeExchangeScalarWhereInput.schema';
import { BadgeExchangeUpdateManyMutationInputObjectSchema } from './BadgeExchangeUpdateManyMutationInput.schema';
import { BadgeExchangeUncheckedUpdateManyWithoutBadgeExchangeInputObjectSchema } from './BadgeExchangeUncheckedUpdateManyWithoutBadgeExchangeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BadgeExchangeUpdateManyWithWhereWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => BadgeExchangeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BadgeExchangeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BadgeExchangeUncheckedUpdateManyWithoutBadgeExchangeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BadgeExchangeUpdateManyWithWhereWithoutItemInputObjectSchema =
  Schema;
