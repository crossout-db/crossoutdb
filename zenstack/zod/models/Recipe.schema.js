"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateSchema = exports.RecipeCreateSchema = exports.RecipeSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    quantity: zod_1.z.number(),
    craftCost: zod_1.z.number().nullish(),
    timestamp: zod_1.z.date().nullish(),
    active: zod_1.z.boolean(),
});
exports.RecipeSchema = baseSchema;
exports.RecipeCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.RecipeUpdateSchema = baseSchema.partial();
