import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type PackPriceInputSchemaType = {
    findUnique: z.ZodType<Prisma.PackPriceFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PackPriceFindFirstArgs>;
    findMany: z.ZodType<Prisma.PackPriceFindManyArgs>;
    create: z.ZodType<Prisma.PackPriceCreateArgs>;
    createMany: z.ZodType<Prisma.PackPriceCreateManyArgs>;
    delete: z.ZodType<Prisma.PackPriceDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PackPriceDeleteManyArgs>;
    update: z.ZodType<Prisma.PackPriceUpdateArgs>;
    updateMany: z.ZodType<Prisma.PackPriceUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PackPriceUpsertArgs>;
    aggregate: z.ZodType<Prisma.PackPriceAggregateArgs>;
    groupBy: z.ZodType<Prisma.PackPriceGroupByArgs>;
    count: z.ZodType<Prisma.PackPriceCountArgs>;
};
export declare const PackPriceInputSchema: PackPriceInputSchemaType;
export {};
