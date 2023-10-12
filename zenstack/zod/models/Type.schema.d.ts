import { z } from 'zod';
export declare const TypeSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>;
export declare const TypeCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: number | undefined;
}, {
    name: string;
    id?: number | undefined;
}>;
export declare const TypeUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    name?: string | undefined;
}, {
    id?: number | undefined;
    name?: string | undefined;
}>;
