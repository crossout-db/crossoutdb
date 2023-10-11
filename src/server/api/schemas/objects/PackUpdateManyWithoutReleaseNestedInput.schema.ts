import { z } from 'zod';
import { PackCreateWithoutReleaseInputObjectSchema } from './PackCreateWithoutReleaseInput.schema';
import { PackUncheckedCreateWithoutReleaseInputObjectSchema } from './PackUncheckedCreateWithoutReleaseInput.schema';
import { PackCreateOrConnectWithoutReleaseInputObjectSchema } from './PackCreateOrConnectWithoutReleaseInput.schema';
import { PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema } from './PackUpsertWithWhereUniqueWithoutReleaseInput.schema';
import { PackCreateManyReleaseInputEnvelopeObjectSchema } from './PackCreateManyReleaseInputEnvelope.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';
import { PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema } from './PackUpdateWithWhereUniqueWithoutReleaseInput.schema';
import { PackUpdateManyWithWhereWithoutReleaseInputObjectSchema } from './PackUpdateManyWithWhereWithoutReleaseInput.schema';
import { PackScalarWhereInputObjectSchema } from './PackScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateManyWithoutReleaseNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackCreateWithoutReleaseInputObjectSchema),
        z.lazy(() => PackCreateWithoutReleaseInputObjectSchema).array(),
        z.lazy(() => PackUncheckedCreateWithoutReleaseInputObjectSchema),
        z
          .lazy(() => PackUncheckedCreateWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PackCreateOrConnectWithoutReleaseInputObjectSchema),
        z
          .lazy(() => PackCreateOrConnectWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema),
        z
          .lazy(() => PackUpsertWithWhereUniqueWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackCreateManyReleaseInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PackWhereUniqueInputObjectSchema),
        z.lazy(() => PackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PackWhereUniqueInputObjectSchema),
        z.lazy(() => PackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PackWhereUniqueInputObjectSchema),
        z.lazy(() => PackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackWhereUniqueInputObjectSchema),
        z.lazy(() => PackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema),
        z
          .lazy(() => PackUpdateWithWhereUniqueWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PackUpdateManyWithWhereWithoutReleaseInputObjectSchema),
        z
          .lazy(() => PackUpdateManyWithWhereWithoutReleaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PackScalarWhereInputObjectSchema),
        z.lazy(() => PackScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackUpdateManyWithoutReleaseNestedInputObjectSchema = Schema;
