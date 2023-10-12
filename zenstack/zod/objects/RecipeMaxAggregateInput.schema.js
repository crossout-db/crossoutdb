"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeMaxAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeMaxAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), resultItemId: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional(), timestamp: zod_1.z.literal(true).optional(), active: zod_1.z.literal(true).optional()
}).strict();
