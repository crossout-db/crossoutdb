import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type TypeInputSchemaType = {
    findUnique: z.ZodType<Prisma.TypeFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.TypeFindFirstArgs>;
    findMany: z.ZodType<Prisma.TypeFindManyArgs>;
    create: z.ZodType<Prisma.TypeCreateArgs>;
    createMany: z.ZodType<Prisma.TypeCreateManyArgs>;
    delete: z.ZodType<Prisma.TypeDeleteArgs>;
    deleteMany: z.ZodType<Prisma.TypeDeleteManyArgs>;
    update: z.ZodType<Prisma.TypeUpdateArgs>;
    updateMany: z.ZodType<Prisma.TypeUpdateManyArgs>;
    upsert: z.ZodType<Prisma.TypeUpsertArgs>;
    aggregate: z.ZodType<Prisma.TypeAggregateArgs>;
    groupBy: z.ZodType<Prisma.TypeGroupByArgs>;
    count: z.ZodType<Prisma.TypeCountArgs>;
};
export declare const TypeInputSchema: TypeInputSchemaType;
export {};
