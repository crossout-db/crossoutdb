import { z } from 'zod';
import { MarketCreateWithoutItemInputObjectSchema } from './MarketCreateWithoutItemInput.schema';
import { MarketUncheckedCreateWithoutItemInputObjectSchema } from './MarketUncheckedCreateWithoutItemInput.schema';
import { MarketCreateOrConnectWithoutItemInputObjectSchema } from './MarketCreateOrConnectWithoutItemInput.schema';
import { MarketCreateManyItemInputEnvelopeObjectSchema } from './MarketCreateManyItemInputEnvelope.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateNestedManyWithoutItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MarketCreateWithoutItemInputObjectSchema),
        z.lazy(() => MarketCreateWithoutItemInputObjectSchema).array(),
        z.lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema),
        z.lazy(() => MarketUncheckedCreateWithoutItemInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MarketCreateOrConnectWithoutItemInputObjectSchema),
        z.lazy(() => MarketCreateOrConnectWithoutItemInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MarketCreateManyItemInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MarketWhereUniqueInputObjectSchema),
        z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MarketCreateNestedManyWithoutItemInputObjectSchema = Schema;
