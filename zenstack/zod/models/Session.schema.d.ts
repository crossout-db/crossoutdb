import { z } from 'zod';
export declare const SessionSchema: z.ZodObject<{
    id: z.ZodString;
    sessionToken: z.ZodString;
    expires: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    sessionToken: string;
    expires: Date;
}, {
    id: string;
    sessionToken: string;
    expires: Date;
}>;
export declare const SessionCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    sessionToken: z.ZodString;
    expires: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    sessionToken: string;
    expires: Date;
    id?: string | undefined;
}, {
    sessionToken: string;
    expires: Date;
    id?: string | undefined;
}>;
export declare const SessionUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    sessionToken: z.ZodOptional<z.ZodString>;
    expires: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    sessionToken?: string | undefined;
    expires?: Date | undefined;
}, {
    id?: string | undefined;
    sessionToken?: string | undefined;
    expires?: Date | undefined;
}>;
