import { z } from 'zod';
export declare const BadgeExchangeSchema: z.ZodObject<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
    badges: z.ZodNumber;
    active: z.ZodBoolean;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    active: boolean;
    quantity: number;
    timestamp: Date;
    badges: number;
}, {
    id: number;
    active: boolean;
    quantity: number;
    timestamp: Date;
    badges: number;
}>;
export declare const BadgeExchangeCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    active: z.ZodBoolean;
    quantity: z.ZodNumber;
    timestamp: z.ZodOptional<z.ZodDate>;
    badges: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    quantity: number;
    badges: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
}, {
    active: boolean;
    quantity: number;
    badges: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
}>;
export declare const BadgeExchangeUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
    badges: z.ZodOptional<z.ZodNumber>;
    active: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    quantity?: number | undefined;
    badges?: number | undefined;
    active?: boolean | undefined;
    timestamp?: Date | undefined;
}, {
    id?: number | undefined;
    quantity?: number | undefined;
    badges?: number | undefined;
    active?: boolean | undefined;
    timestamp?: Date | undefined;
}>;
