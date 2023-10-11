import { z } from 'zod';
import { logWhereUniqueInputObjectSchema } from './logWhereUniqueInput.schema';
import { logUpdateWithoutUserInputObjectSchema } from './logUpdateWithoutUserInput.schema';
import { logUncheckedUpdateWithoutUserInputObjectSchema } from './logUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => logWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => logUpdateWithoutUserInputObjectSchema),
      z.lazy(() => logUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const logUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
