import { z } from 'zod';
import { PackItemCreateWithoutPackInputObjectSchema } from './PackItemCreateWithoutPackInput.schema';
import { PackItemUncheckedCreateWithoutPackInputObjectSchema } from './PackItemUncheckedCreateWithoutPackInput.schema';
import { PackItemCreateOrConnectWithoutPackInputObjectSchema } from './PackItemCreateOrConnectWithoutPackInput.schema';
import { PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema } from './PackItemUpsertWithWhereUniqueWithoutPackInput.schema';
import { PackItemCreateManyPackInputEnvelopeObjectSchema } from './PackItemCreateManyPackInputEnvelope.schema';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema } from './PackItemUpdateWithWhereUniqueWithoutPackInput.schema';
import { PackItemUpdateManyWithWhereWithoutPackInputObjectSchema } from './PackItemUpdateManyWithWhereWithoutPackInput.schema';
import { PackItemScalarWhereInputObjectSchema } from './PackItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemUpdateManyWithoutPackNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema),
        z
          .lazy(() => PackItemUpsertWithWhereUniqueWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackItemCreateManyPackInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema),
        z
          .lazy(() => PackItemUpdateWithWhereUniqueWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PackItemUpdateManyWithWhereWithoutPackInputObjectSchema),
        z
          .lazy(() => PackItemUpdateManyWithWhereWithoutPackInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PackItemScalarWhereInputObjectSchema),
        z.lazy(() => PackItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackItemUpdateManyWithoutPackNestedInputObjectSchema = Schema;
