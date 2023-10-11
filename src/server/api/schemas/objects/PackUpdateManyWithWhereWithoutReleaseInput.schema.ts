import { z } from 'zod';
import { PackScalarWhereInputObjectSchema } from './PackScalarWhereInput.schema';
import { PackUpdateManyMutationInputObjectSchema } from './PackUpdateManyMutationInput.schema';
import { PackUncheckedUpdateManyWithoutPacksInputObjectSchema } from './PackUncheckedUpdateManyWithoutPacksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackUpdateManyWithWhereWithoutReleaseInput> = z
  .object({
    where: z.lazy(() => PackScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PackUpdateManyMutationInputObjectSchema),
      z.lazy(() => PackUncheckedUpdateManyWithoutPacksInputObjectSchema),
    ]),
  })
  .strict();

export const PackUpdateManyWithWhereWithoutReleaseInputObjectSchema = Schema;
