"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeAvgAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeAvgAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), resultItemId: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional()
}).strict();
