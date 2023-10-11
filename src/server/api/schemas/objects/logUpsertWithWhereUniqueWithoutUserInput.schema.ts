import { z } from 'zod';
import { logWhereUniqueInputObjectSchema } from './logWhereUniqueInput.schema';
import { logUpdateWithoutUserInputObjectSchema } from './logUpdateWithoutUserInput.schema';
import { logUncheckedUpdateWithoutUserInputObjectSchema } from './logUncheckedUpdateWithoutUserInput.schema';
import { logCreateWithoutUserInputObjectSchema } from './logCreateWithoutUserInput.schema';
import { logUncheckedCreateWithoutUserInputObjectSchema } from './logUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => logWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => logUpdateWithoutUserInputObjectSchema),
      z.lazy(() => logUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => logCreateWithoutUserInputObjectSchema),
      z.lazy(() => logUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const logUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
