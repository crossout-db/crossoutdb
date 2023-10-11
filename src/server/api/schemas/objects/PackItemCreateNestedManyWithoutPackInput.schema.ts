import { z } from 'zod';
import { PackItemCreateWithoutPackInputObjectSchema } from './PackItemCreateWithoutPackInput.schema';
import { PackItemUncheckedCreateWithoutPackInputObjectSchema } from './PackItemUncheckedCreateWithoutPackInput.schema';
import { PackItemCreateOrConnectWithoutPackInputObjectSchema } from './PackItemCreateOrConnectWithoutPackInput.schema';
import { PackItemCreateManyPackInputEnvelopeObjectSchema } from './PackItemCreateManyPackInputEnvelope.schema';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateNestedManyWithoutPackInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackItemCreateWithoutPackInputObjectSchema),
        z.lazy(() => PackItemCreateWithoutPackInputObjectSchema).array(),
        z.lazy(() => PackItemUncheckedCreateWithoutPackInputObjectSchema),
        z
          .lazy(() => PackItemUncheckedCreateWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PackItemCreateOrConnectWithoutPackInputObjectSchema),
        z
          .lazy(() => PackItemCreateOrConnectWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackItemCreateManyPackInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackItemCreateNestedManyWithoutPackInputObjectSchema = Schema;
