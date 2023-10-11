import { z } from 'zod';
import { ReleaseUpdateWithoutRecipesInputObjectSchema } from './ReleaseUpdateWithoutRecipesInput.schema';
import { ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedUpdateWithoutRecipesInput.schema';
import { ReleaseCreateWithoutRecipesInputObjectSchema } from './ReleaseCreateWithoutRecipesInput.schema';
import { ReleaseUncheckedCreateWithoutRecipesInputObjectSchema } from './ReleaseUncheckedCreateWithoutRecipesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReleaseUpsertWithoutRecipesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ReleaseUpdateWithoutRecipesInputObjectSchema),
      z.lazy(() => ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReleaseCreateWithoutRecipesInputObjectSchema),
      z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInputObjectSchema),
    ]),
  })
  .strict();

export const ReleaseUpsertWithoutRecipesInputObjectSchema = Schema;
