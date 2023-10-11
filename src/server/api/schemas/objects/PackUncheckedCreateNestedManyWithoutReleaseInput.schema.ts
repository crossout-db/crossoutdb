import { z } from 'zod';
import { PackCreateWithoutReleaseInputObjectSchema } from './PackCreateWithoutReleaseInput.schema';
import { PackUncheckedCreateWithoutReleaseInputObjectSchema } from './PackUncheckedCreateWithoutReleaseInput.schema';
import { PackCreateOrConnectWithoutReleaseInputObjectSchema } from './PackCreateOrConnectWithoutReleaseInput.schema';
import { PackCreateManyReleaseInputEnvelopeObjectSchema } from './PackCreateManyReleaseInputEnvelope.schema';
import { PackWhereUniqueInputObjectSchema } from './PackWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUncheckedCreateNestedManyWithoutReleaseInput> =
  z
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
      createMany: z
        .lazy(() => PackCreateManyReleaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PackWhereUniqueInputObjectSchema),
          z.lazy(() => PackWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PackUncheckedCreateNestedManyWithoutReleaseInputObjectSchema =
  Schema;
