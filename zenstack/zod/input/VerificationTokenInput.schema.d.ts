import { z } from 'zod';
import type { Prisma } from '@prisma/client';
declare type VerificationTokenInputSchemaType = {
    findUnique: z.ZodType<Prisma.VerificationTokenFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.VerificationTokenFindFirstArgs>;
    findMany: z.ZodType<Prisma.VerificationTokenFindManyArgs>;
    create: z.ZodType<Prisma.VerificationTokenCreateArgs>;
    createMany: z.ZodType<Prisma.VerificationTokenCreateManyArgs>;
    delete: z.ZodType<Prisma.VerificationTokenDeleteArgs>;
    deleteMany: z.ZodType<Prisma.VerificationTokenDeleteManyArgs>;
    update: z.ZodType<Prisma.VerificationTokenUpdateArgs>;
    updateMany: z.ZodType<Prisma.VerificationTokenUpdateManyArgs>;
    upsert: z.ZodType<Prisma.VerificationTokenUpsertArgs>;
    aggregate: z.ZodType<Prisma.VerificationTokenAggregateArgs>;
    groupBy: z.ZodType<Prisma.VerificationTokenGroupByArgs>;
    count: z.ZodType<Prisma.VerificationTokenCountArgs>;
};
export declare const VerificationTokenInputSchema: VerificationTokenInputSchemaType;
export {};
