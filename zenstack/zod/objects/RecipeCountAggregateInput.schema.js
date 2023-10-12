"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), resultItemId: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), releaseId: zod_1.z.literal(true).optional(), craftCost: zod_1.z.literal(true).optional(), timestamp: zod_1.z.literal(true).optional(), active: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
