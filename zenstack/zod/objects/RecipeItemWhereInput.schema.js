"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const RecipeRelationFilter_schema_1 = require("./RecipeRelationFilter.schema");
const RecipeWhereInput_schema_1 = require("./RecipeWhereInput.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.RecipeItemWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.RecipeItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.RecipeItemWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.RecipeItemWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.RecipeItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.RecipeItemWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), recipeId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), recipe: zod_1.z.union([zod_1.z.lazy(() => RecipeRelationFilter_schema_1.RecipeRelationFilterObjectSchema),
        zod_1.z.lazy(() => RecipeWhereInput_schema_1.RecipeWhereInputObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
