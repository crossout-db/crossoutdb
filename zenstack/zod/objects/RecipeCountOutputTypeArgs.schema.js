"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeCountOutputTypeSelect_schema_1 = require("./RecipeCountOutputTypeSelect.schema");
exports.RecipeCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => RecipeCountOutputTypeSelect_schema_1.RecipeCountOutputTypeSelectObjectSchema).optional()
}).strict();
