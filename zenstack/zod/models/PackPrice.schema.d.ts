import { z } from 'zod';
export declare const PackPriceSchema: z.ZodObject<{
    id: z.ZodNumber;
    timestamp: z.ZodDate;
    priceUSD: z.ZodNumber;
    priceEUR: z.ZodNumber;
    priceGBP: z.ZodNumber;
    priceRUB: z.ZodNumber;
    discount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    timestamp: Date;
    priceUSD: number;
    priceEUR: number;
    priceGBP: number;
    priceRUB: number;
    discount: number;
}, {
    id: number;
    timestamp: Date;
    priceUSD: number;
    priceEUR: number;
    priceGBP: number;
    priceRUB: number;
    discount: number;
}>;
export declare const PackPriceCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodDate>;
    priceUSD: z.ZodNumber;
    priceEUR: z.ZodNumber;
    priceGBP: z.ZodNumber;
    priceRUB: z.ZodNumber;
    discount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    priceUSD: number;
    priceEUR: number;
    priceGBP: number;
    priceRUB: number;
    discount: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
}, {
    priceUSD: number;
    priceEUR: number;
    priceGBP: number;
    priceRUB: number;
    discount: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
}>;
export declare const PackPriceUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodDate>;
    priceUSD: z.ZodOptional<z.ZodNumber>;
    priceEUR: z.ZodOptional<z.ZodNumber>;
    priceGBP: z.ZodOptional<z.ZodNumber>;
    priceRUB: z.ZodOptional<z.ZodNumber>;
    discount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    timestamp?: Date | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
    priceGBP?: number | undefined;
    priceRUB?: number | undefined;
    discount?: number | undefined;
}, {
    id?: number | undefined;
    timestamp?: Date | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
    priceGBP?: number | undefined;
    priceRUB?: number | undefined;
    discount?: number | undefined;
}>;
