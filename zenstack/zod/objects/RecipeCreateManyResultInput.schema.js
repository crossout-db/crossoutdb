"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateManyResultInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeCreateManyResultInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), quantity: zod_1.z.number(), releaseId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean()
}).strict();
