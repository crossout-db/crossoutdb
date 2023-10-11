import { z } from 'zod';
import { ReleaseWhereUniqueInputObjectSchema } from './ReleaseWhereUniqueInput.schema';
import { ReleaseCreateWithoutRecipesInputObjectSchema } from './ReleaseCreateWithoutRecipesInput.schema';
import { ReleaseUncheckedCreateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedCreateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseCreateOrConnectWithoutRecipesInput> = z
  .object({
    where: z.lazy(() => ReleaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutRecipesInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseCreateOrConnectWithoutRecipesInputObjectSchema = Schema;
