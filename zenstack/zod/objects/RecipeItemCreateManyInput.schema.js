"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemCreateManyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeItemCreateManyInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), recipeId: zod_1.z.number(), itemId: zod_1.z.number(), quantity: zod_1.z.number()
}).strict();
