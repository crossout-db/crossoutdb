"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateManyReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeCreateManyReleaseInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), resultItemId: zod_1.z.number(), quantity: zod_1.z.number(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean()
}).strict();
