"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemWhereInput_schema_1 = require("./RecipeItemWhereInput.schema");
exports.RecipeItemListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => RecipeItemWhereInput_schema_1.RecipeItemWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => RecipeItemWhereInput_schema_1.RecipeItemWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => RecipeItemWhereInput_schema_1.RecipeItemWhereInputObjectSchema).optional()
}).strict();
