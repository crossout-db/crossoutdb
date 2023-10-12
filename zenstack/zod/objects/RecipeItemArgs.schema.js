"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemSelect_schema_1 = require("./RecipeItemSelect.schema");
const RecipeItemInclude_schema_1 = require("./RecipeItemInclude.schema");
exports.RecipeItemArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => RecipeItemSelect_schema_1.RecipeItemSelectObjectSchema).optional(), include: zod_1.z.lazy(() => RecipeItemInclude_schema_1.RecipeItemIncludeObjectSchema).optional()
}).strict();
