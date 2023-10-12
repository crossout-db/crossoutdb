import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type SynergyInputSchemaType = {
    findUnique: z.ZodType<Prisma.SynergyFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.SynergyFindFirstArgs>;
    findMany: z.ZodType<Prisma.SynergyFindManyArgs>;
    create: z.ZodType<Prisma.SynergyCreateArgs>;
    createMany: z.ZodType<Prisma.SynergyCreateManyArgs>;
    delete: z.ZodType<Prisma.SynergyDeleteArgs>;
    deleteMany: z.ZodType<Prisma.SynergyDeleteManyArgs>;
    update: z.ZodType<Prisma.SynergyUpdateArgs>;
    updateMany: z.ZodType<Prisma.SynergyUpdateManyArgs>;
    upsert: z.ZodType<Prisma.SynergyUpsertArgs>;
    aggregate: z.ZodType<Prisma.SynergyAggregateArgs>;
    groupBy: z.ZodType<Prisma.SynergyGroupByArgs>;
    count: z.ZodType<Prisma.SynergyCountArgs>;
};
export declare const SynergyInputSchema: SynergyInputSchemaType;
export {};
