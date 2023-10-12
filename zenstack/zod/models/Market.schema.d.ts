import { z } from 'zod';
export declare const MarketSchema: z.ZodObject<{
    id: z.ZodNumber;
    marketDef: z.ZodString;
    sellPriceMin: z.ZodNumber;
    sellOrders: z.ZodNumber;
    buyPriceMax: z.ZodNumber;
    buyOrders: z.ZodNumber;
    craftCost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    timestamp: Date;
    marketDef: string;
    sellPriceMin: number;
    sellOrders: number;
    buyPriceMax: number;
    buyOrders: number;
    craftCost?: number | null | undefined;
}, {
    id: number;
    timestamp: Date;
    marketDef: string;
    sellPriceMin: number;
    sellOrders: number;
    buyPriceMax: number;
    buyOrders: number;
    craftCost?: number | null | undefined;
}>;
export declare const MarketCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    craftCost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodDate>;
    marketDef: z.ZodString;
    sellPriceMin: z.ZodNumber;
    sellOrders: z.ZodNumber;
    buyPriceMax: z.ZodNumber;
    buyOrders: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    marketDef: string;
    sellPriceMin: number;
    sellOrders: number;
    buyPriceMax: number;
    buyOrders: number;
    id?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | undefined;
}, {
    marketDef: string;
    sellPriceMin: number;
    sellOrders: number;
    buyPriceMax: number;
    buyOrders: number;
    id?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | undefined;
}>;
export declare const MarketUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    marketDef: z.ZodOptional<z.ZodString>;
    sellPriceMin: z.ZodOptional<z.ZodNumber>;
    sellOrders: z.ZodOptional<z.ZodNumber>;
    buyPriceMax: z.ZodOptional<z.ZodNumber>;
    buyOrders: z.ZodOptional<z.ZodNumber>;
    craftCost: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    timestamp: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    marketDef?: string | undefined;
    sellPriceMin?: number | undefined;
    sellOrders?: number | undefined;
    buyPriceMax?: number | undefined;
    buyOrders?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | undefined;
}, {
    id?: number | undefined;
    marketDef?: string | undefined;
    sellPriceMin?: number | undefined;
    sellOrders?: number | undefined;
    buyPriceMax?: number | undefined;
    buyOrders?: number | undefined;
    craftCost?: number | null | undefined;
    timestamp?: Date | undefined;
}>;
