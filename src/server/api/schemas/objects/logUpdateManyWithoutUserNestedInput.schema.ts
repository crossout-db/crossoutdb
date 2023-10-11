import { z } from 'zod';
import { logCreateWithoutUserInputObjectSchema } from './logCreateWithoutUserInput.schema';
import { logUncheckedCreateWithoutUserInputObjectSchema } from './logUncheckedCreateWithoutUserInput.schema';
import { logCreateOrConnectWithoutUserInputObjectSchema } from './logCreateOrConnectWithoutUserInput.schema';
import { logUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './logUpsertWithWhereUniqueWithoutUserInput.schema';
import { logCreateManyUserInputEnvelopeObjectSchema } from './logCreateManyUserInputEnvelope.schema';
import { logWhereUniqueInputObjectSchema } from './logWhereUniqueInput.schema';
import { logUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './logUpdateWithWhereUniqueWithoutUserInput.schema';
import { logUpdateManyWithWhereWithoutUserInputObjectSchema } from './logUpdateManyWithWhereWithoutUserInput.schema';
import { logScalarWhereInputObjectSchema } from './logScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.logUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => logUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => logUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => logCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => logWhereUniqueInputObjectSchema),
        z.lazy(() => logWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => logWhereUniqueInputObjectSchema),
        z.lazy(() => logWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => logWhereUniqueInputObjectSchema),
        z.lazy(() => logWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => logWhereUniqueInputObjectSchema),
        z.lazy(() => logWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => logUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => logUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => logUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => logUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => logScalarWhereInputObjectSchema),
        z.lazy(() => logScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const logUpdateManyWithoutUserNestedInputObjectSchema = Schema;
