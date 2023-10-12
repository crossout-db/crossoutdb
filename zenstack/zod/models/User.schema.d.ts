import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodEnum<["USER", "CONTRIBUTOR", "ADMIN"]>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    emailVerified: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "USER" | "CONTRIBUTOR" | "ADMIN";
    name?: string | null | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}, {
    id: string;
    role: "USER" | "CONTRIBUTOR" | "ADMIN";
    name?: string | null | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}>;
export declare const UserCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodEnum<["USER", "CONTRIBUTOR", "ADMIN"]>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    emailVerified: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    name?: string | null | undefined;
    role?: "USER" | "CONTRIBUTOR" | "ADMIN" | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}, {
    id?: string | undefined;
    name?: string | null | undefined;
    role?: "USER" | "CONTRIBUTOR" | "ADMIN" | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}>;
export declare const UserUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    role: z.ZodOptional<z.ZodEnum<["USER", "CONTRIBUTOR", "ADMIN"]>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    emailVerified: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    image: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    name?: string | null | undefined;
    role?: "USER" | "CONTRIBUTOR" | "ADMIN" | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}, {
    id?: string | undefined;
    name?: string | null | undefined;
    role?: "USER" | "CONTRIBUTOR" | "ADMIN" | undefined;
    email?: string | null | undefined;
    emailVerified?: Date | null | undefined;
    image?: string | null | undefined;
}>;
