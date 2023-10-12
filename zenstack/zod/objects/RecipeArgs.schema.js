"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeSelect_schema_1 = require("./RecipeSelect.schema");
const RecipeInclude_schema_1 = require("./RecipeInclude.schema");
exports.RecipeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => RecipeSelect_schema_1.RecipeSelectObjectSchema).optional(), include: zod_1.z.lazy(() => RecipeInclude_schema_1.RecipeIncludeObjectSchema).optional()
}).strict();
