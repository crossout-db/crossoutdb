"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateSchema = exports.RecipeItemCreateSchema = exports.RecipeItemSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.RecipeItemSchema = baseSchema;
exports.RecipeItemCreateSchema = baseSchema.partial({
    id: true,
});
exports.RecipeItemUpdateSchema = baseSchema.partial();
