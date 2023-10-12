"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeItemCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), recipeId: zod_1.z.literal(true).optional(), itemId: zod_1.z.literal(true).optional(), quantity: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
