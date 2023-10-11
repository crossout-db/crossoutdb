import { z } from 'zod';
import { logWhereUniqueInputObjectSchema } from './logWhereUniqueInput.schema';
import { logCreateWithoutUserInputObjectSchema } from './logCreateWithoutUserInput.schema';
import { logUncheckedCreateWithoutUserInputObjectSchema } from './logUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => logWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => logCreateWithoutUserInputObjectSchema),
      z.lazy(() => logUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const logCreateOrConnectWithoutUserInputObjectSchema = Schema;
