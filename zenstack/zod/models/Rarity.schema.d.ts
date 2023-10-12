import { z } from 'zod';
export declare const RaritySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    order: z.ZodNumber;
    primaryColor: z.ZodString;
    secondaryColor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    order: number;
    primaryColor: string;
    secondaryColor: string;
}, {
    id: number;
    name: string;
    order: number;
    primaryColor: string;
    secondaryColor: string;
}>;
export declare const RarityCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    order: z.ZodNumber;
    primaryColor: z.ZodString;
    secondaryColor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    order: number;
    primaryColor: string;
    secondaryColor: string;
    id?: number | undefined;
}, {
    name: string;
    order: number;
    primaryColor: string;
    secondaryColor: string;
    id?: number | undefined;
}>;
export declare const RarityUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodNumber>;
    primaryColor: z.ZodOptional<z.ZodString>;
    secondaryColor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    name?: string | undefined;
    order?: number | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
}, {
    id?: number | undefined;
    name?: string | undefined;
    order?: number | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
}>;
