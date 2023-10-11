import { z } from 'zod';
import { PackItemCreateWithoutItemInputObjectSchema } from './PackItemCreateWithoutItemInput.schema';
import { PackItemUncheckedCreateWithoutItemInputObjectSchema } from './PackItemUncheckedCreateWithoutItemInput.schema';
import { PackItemCreateOrConnectWithoutItemInputObjectSchema } from './PackItemCreateOrConnectWithoutItemInput.schema';
import { PackItemCreateManyItemInputEnvelopeObjectSchema } from './PackItemCreateManyItemInputEnvelope.schema';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateNestedManyWithoutItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PackItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => PackItemCreateWithoutItemInputObjectSchema).array(),
        z.lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema),
        z
          .lazy(() => PackItemUncheckedCreateWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PackItemCreateOrConnectWithoutItemInputObjectSchema),
        z
          .lazy(() => PackItemCreateOrConnectWithoutItemInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PackItemCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PackItemWhereUniqueInputObjectSchema),
        z.lazy(() => PackItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PackItemCreateNestedManyWithoutItemInputObjectSchema = Schema;
