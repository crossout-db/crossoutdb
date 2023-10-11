import { z } from 'zod';
import { PackPriceCreateWithoutPackInputObjectSchema } from './PackPriceCreateWithoutPackInput.schema';
import { PackPriceUncheckedCreateWithoutPackInputObjectSchema } from './PackPriceUncheckedCreateWithoutPackInput.schema';
import { PackPriceCreateOrConnectWithoutPackInputObjectSchema } from './PackPriceCreateOrConnectWithoutPackInput.schema';
import { PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema } from './PackPriceUpsertWithWhereUniqueWithoutPackInput.schema';
import { PackPriceCreateManyPackInputEnvelopeObjectSchema } from './PackPriceCreateManyPackInputEnvelope.schema';
import { PackPriceWhereUniqueInputObjectSchema } from './PackPriceWhereUniqueInput.schema';
import { PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema } from './PackPriceUpdateWithWhereUniqueWithoutPackInput.schema';
import { PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema } from './PackPriceUpdateManyWithWhereWithoutPackInput.schema';
import { PackPriceScalarWhereInputObjectSchema } from './PackPriceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackPriceUpdateManyWithoutPackNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema,
        ),
        z
          .lazy(
            () => PackPriceUpsertWithWhereUniqueWithoutPackInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackPriceCreateManyPackInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema),
        z.lazy(() => PackPriceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema,
        ),
        z
          .lazy(
            () => PackPriceUpdateWithWhereUniqueWithoutPackInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema),
        z
          .lazy(() => PackPriceUpdateManyWithWhereWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PackPriceScalarWhereInputObjectSchema),
        z.lazy(() => PackPriceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackPriceUpdateManyWithoutPackNestedInputObjectSchema = Schema;
