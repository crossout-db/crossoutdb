import { z } from 'zod';
import { logScalarWhereInputObjectSchema } from './logScalarWhereInput.schema';
import { logUpdateManyMutationInputObjectSchema } from './logUpdateManyMutationInput.schema';
import { logUncheckedUpdateManyWithoutLogInputObjectSchema } from './logUncheckedUpdateManyWithoutLogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => logScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => logUpdateManyMutationInputObjectSchema),
      z.lazy(() => logUncheckedUpdateManyWithoutLogInputObjectSchema),
    ]),
  })
  .strict();

export const logUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
