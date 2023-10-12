import { z } from 'zod';
export declare const VerificationTokenSchema: z.ZodObject<{
    identifier: z.ZodString;
    token: z.ZodString;
    expires: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    expires: Date;
    identifier: string;
    token: string;
}, {
    expires: Date;
    identifier: string;
    token: string;
}>;
export declare const VerificationTokenCreateSchema: z.ZodObject<{
    identifier: z.ZodString;
    token: z.ZodString;
    expires: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    expires: Date;
    identifier: string;
    token: string;
}, {
    expires: Date;
    identifier: string;
    token: string;
}>;
export declare const VerificationTokenUpdateSchema: z.ZodObject<{
    identifier: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodString>;
    expires: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    identifier?: string | undefined;
    token?: string | undefined;
    expires?: Date | undefined;
}, {
    identifier?: string | undefined;
    token?: string | undefined;
    expires?: Date | undefined;
}>;
