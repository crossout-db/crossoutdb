"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), itemId: zod_1.z.number(), quantity: zod_1.z.number()
}).strict();
