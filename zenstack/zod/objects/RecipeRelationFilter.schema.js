"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
exports.RecipeRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema).optional()
}).strict();
