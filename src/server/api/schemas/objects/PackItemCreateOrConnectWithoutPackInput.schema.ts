import { z } from 'zod';
import { PackItemWhereUniqueInputObjectSchema } from './PackItemWhereUniqueInput.schema';
import { PackItemCreateWithoutPackInputObjectSchema } from './PackItemCreateWithoutPackInput.schema';
import { PackItemUncheckedCreateWithoutPackInputObjectSchema } from './PackItemUncheckedCreateWithoutPackInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackItemCreateOrConnectWithoutPackInput> = z
  .object({
    where: z.lazy(() => PackItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PackItemCreateWithoutPackInputObjectSchema),
      z.lazy(() => PackItemUncheckedCreateWithoutPackInputObjectSchema),
    ]),
  })
  .strict();

export const PackItemCreateOrConnectWithoutPackInputObjectSchema = Schema;
