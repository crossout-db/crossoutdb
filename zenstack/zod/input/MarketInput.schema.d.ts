import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type MarketInputSchemaType = {
    findUnique: z.ZodType<Prisma.MarketFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MarketFindFirstArgs>;
    findMany: z.ZodType<Prisma.MarketFindManyArgs>;
    create: z.ZodType<Prisma.MarketCreateArgs>;
    createMany: z.ZodType<Prisma.MarketCreateManyArgs>;
    delete: z.ZodType<Prisma.MarketDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MarketDeleteManyArgs>;
    update: z.ZodType<Prisma.MarketUpdateArgs>;
    updateMany: z.ZodType<Prisma.MarketUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MarketUpsertArgs>;
    aggregate: z.ZodType<Prisma.MarketAggregateArgs>;
    groupBy: z.ZodType<Prisma.MarketGroupByArgs>;
    count: z.ZodType<Prisma.MarketCountArgs>;
};
export declare const MarketInputSchema: MarketInputSchemaType;
export {};
