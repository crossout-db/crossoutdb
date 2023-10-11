import { z } from 'zod';
import { ReleaseCreateWithoutRecipesInputObjectSchema } from './ReleaseCreateWithoutRecipesInput.schema';
import { ReleaseUncheckedCreateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedCreateWithoutRecipesInput.schema';
import { ReleaseCreateOrConnectWithoutRecipesInputObjectSchema } from './ReleaseCreateOrConnectWithoutRecipesInput.schema';
import { ReleaseUpsertWithoutRecipesInputObjectSchema } from './ReleaseUpsertWithoutRecipesInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseUpdateWithoutRecipesInputObjectSchema } from './ReleaseUpdateWithoutRecipesInput.schema';
import { ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedUpdateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpdateOneWithoutRecipesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReleaseCreateWithoutRecipesInputObjectSchema),
        z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ReleaseCreateOrConnectWithoutRecipesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ReleaseUpsertWithoutRecipesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ReleaseUpdateWithoutRecipesInputObjectSchema),
        z.lazy(() => ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema = Schema;
