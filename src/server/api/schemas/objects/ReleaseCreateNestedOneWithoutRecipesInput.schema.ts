import { z } from 'zod';
import { ReleaseCreateWithoutRecipesInputObjectSchema } from './ReleaseCreateWithoutRecipesInput.schema';
import { ReleaseUncheckedCreateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedCreateWithoutRecipesInput.schema';
import { ReleaseCreateOrConnectWithoutRecipesInputObjectSchema } from './ReleaseCreateOrConnectWithoutRecipesInput.schema';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateNestedOneWithoutRecipesInput> = z
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
    connect: z.lazy(() => ReleaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ReleaseCreateNestedOneWithoutRecipesInputObjectSchema = Schema;
