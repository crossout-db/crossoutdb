"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeCountOutputTypeSelectObjectSchema = zod_1.z.object({
    ingredients: zod_1.z.boolean().optional()
}).strict();
