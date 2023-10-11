import { z } from 'zod';
import { PackPriceCreateWithoutPackInputObjectSchema } from './PackPriceCreateWithoutPackInput.schema';
import { PackPriceUncheckedCreateWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateWithoutPackInput.schema';
import { PackPriceCreateOrConnectWithoutPackInputObjectSchema } from './PackPriceCreateOrConnectWithoutPackInput.schema';
import { PackPriceCreateManyPackInputEnvelopeObjectSchema } from './PackPriceCreateManyPackInputEnvelope.schema';
import { PackPriceWhereUniqueInputObjectSchema } from './PackPriceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceCreateNestedManyWithoutPackInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackPriceCreateWithoutPackInputObjectSchema),
        z.lazy(() => PackPriceCreateWithoutPackInputObjectSchema).array(),
        z.lazy(() => PackPriceUncheckedCreateWithoutPackInputObjectSchema),
        z
          .lazy(() => PackPriceUncheckedCreateWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PackPriceCreateOrConnectWithoutPackInputObjectSchema),
        z
          .lazy(() => PackPriceCreateOrConnectWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackPriceCreateManyPackInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackPriceCreateNestedManyWithoutPackInputObjectSchema = Schema;
