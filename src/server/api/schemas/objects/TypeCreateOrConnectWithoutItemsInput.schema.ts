import { z } from 'zod';
import { TypeWhereUniqueInputObjectSchema } from './TypeWhereUniqueInput.schema';
import { TypeCreateWithoutItemsInputObjectSchema } from './TypeCreateWithoutItemsInput.schema';
import { TypeUncheckedCreateWithoutItemsInputObjectSchema } from './TypeUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TypeCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => TypeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TypeCreateWithoutItemsInputObjectSchema),
      z.lazy(() => TypeUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const TypeCreateOrConnectWithoutItemsInputObjectSchema = Schema;
