import { z } from 'zod';
export declare const LogSchema: z.ZodObject<{
    id: z.ZodNumber;
    timestamp: z.ZodDate;
    tableChanged: z.ZodString;
    recordId: z.ZodNumber;
    record: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    id: number;
    timestamp: Date;
    tableChanged: string;
    recordId: number;
    record?: any;
}, {
    id: number;
    timestamp: Date;
    tableChanged: string;
    recordId: number;
    record?: any;
}>;
export declare const LogCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodDate>;
    tableChanged: z.ZodString;
    recordId: z.ZodNumber;
    record: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    tableChanged: string;
    recordId: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
    record?: any;
}, {
    tableChanged: string;
    recordId: number;
    id?: number | undefined;
    timestamp?: Date | undefined;
    record?: any;
}>;
export declare const LogUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodDate>;
    tableChanged: z.ZodOptional<z.ZodString>;
    recordId: z.ZodOptional<z.ZodNumber>;
    record: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    timestamp?: Date | undefined;
    tableChanged?: string | undefined;
    recordId?: number | undefined;
    record?: any;
}, {
    id?: number | undefined;
    timestamp?: Date | undefined;
    tableChanged?: string | undefined;
    recordId?: number | undefined;
    record?: any;
}>;
