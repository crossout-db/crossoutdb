import { z } from 'zod';
export declare const RecipeItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    quantity: number;
}, {
    id: number;
    quantity: number;
}>;
export declare const RecipeItemCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    id?: number | undefined;
}, {
    quantity: number;
    id?: number | undefined;
}>;
export declare const RecipeItemUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    quantity?: number | undefined;
}, {
    id?: number | undefined;
    quantity?: number | undefined;
}>;
