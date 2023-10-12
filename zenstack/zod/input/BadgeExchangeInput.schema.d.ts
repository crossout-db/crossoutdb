import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type BadgeExchangeInputSchemaType = {
    findUnique: z.ZodType<Prisma.BadgeExchangeFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BadgeExchangeFindFirstArgs>;
    findMany: z.ZodType<Prisma.BadgeExchangeFindManyArgs>;
    create: z.ZodType<Prisma.BadgeExchangeCreateArgs>;
    createMany: z.ZodType<Prisma.BadgeExchangeCreateManyArgs>;
    delete: z.ZodType<Prisma.BadgeExchangeDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BadgeExchangeDeleteManyArgs>;
    update: z.ZodType<Prisma.BadgeExchangeUpdateArgs>;
    updateMany: z.ZodType<Prisma.BadgeExchangeUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BadgeExchangeUpsertArgs>;
    aggregate: z.ZodType<Prisma.BadgeExchangeAggregateArgs>;
    groupBy: z.ZodType<Prisma.BadgeExchangeGroupByArgs>;
    count: z.ZodType<Prisma.BadgeExchangeCountArgs>;
};
export declare const BadgeExchangeInputSchema: BadgeExchangeInputSchemaType;
export {};
