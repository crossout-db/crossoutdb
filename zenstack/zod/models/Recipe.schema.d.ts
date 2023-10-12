import { z } from 'zod';
export declare const RecipeSchema: z.ZodObject<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
    craftCost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    active: boolean;
    quantity: number;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
}, {
    id: number;
    active: boolean;
    quantity: number;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
}>;
export declare const RecipeCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    active: z.ZodBoolean;
    quantity: z.ZodNumber;
    craftCost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    quantity: number;
    id?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
}, {
    active: boolean;
    quantity: number;
    id?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
}>;
export declare const RecipeUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
    craftCost: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    timestamp: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    active: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    quantity?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
    active?: boolean | undefined;
}, {
    id?: number | undefined;
    quantity?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | null | undefined;
    active?: boolean | undefined;
}>;
