"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
exports.RecipeListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional()
}).strict();
