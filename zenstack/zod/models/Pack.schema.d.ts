import { z } from 'zod';
export declare const PackSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    steamAppID: z.ZodNumber;
    key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coins: z.ZodNumber;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    active: boolean;
    steamAppID: number;
    coins: number;
    description?: string | null | undefined;
    key?: string | null | undefined;
}, {
    id: number;
    name: string;
    active: boolean;
    steamAppID: number;
    coins: number;
    description?: string | null | undefined;
    key?: string | null | undefined;
}>;
export declare const PackCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    active: z.ZodBoolean;
    steamAppID: z.ZodNumber;
    key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coins: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    active: boolean;
    steamAppID: number;
    coins: number;
    id?: number | undefined;
    description?: string | null | undefined;
    key?: string | null | undefined;
}, {
    name: string;
    active: boolean;
    steamAppID: number;
    coins: number;
    id?: number | undefined;
    description?: string | null | undefined;
    key?: string | null | undefined;
}>;
export declare const PackUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    steamAppID: z.ZodOptional<z.ZodNumber>;
    key: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    coins: z.ZodOptional<z.ZodNumber>;
    active: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    name?: string | undefined;
    description?: string | null | undefined;
    steamAppID?: number | undefined;
    key?: string | null | undefined;
    coins?: number | undefined;
    active?: boolean | undefined;
}, {
    id?: number | undefined;
    name?: string | undefined;
    description?: string | null | undefined;
    steamAppID?: number | undefined;
    key?: string | null | undefined;
    coins?: number | undefined;
    active?: boolean | undefined;
}>;
