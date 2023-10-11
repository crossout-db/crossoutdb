import { z } from 'zod';
import { logCreateWithoutUserInputObjectSchema } from './logCreateWithoutUserInput.schema';
import { logUncheckedCreateWithoutUserInputObjectSchema } from './logUncheckedCreateWithoutUserInput.schema';
import { logCreateOrConnectWithoutUserInputObjectSchema } from './logCreateOrConnectWithoutUserInput.schema';
import { logCreateManyUserInputEnvelopeObjectSchema } from './logCreateManyUserInputEnvelope.schema';
import { logWhereUniqueInputObjectSchema } from './logWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => logCreateWithoutUserInputObjectSchema),
        z.lazy(() => logCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => logUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => logUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => logCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => logCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => logCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => logWhereUniqueInputObjectSchema),
        z.lazy(() => logWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const logCreateNestedManyWithoutUserInputObjectSchema = Schema;
