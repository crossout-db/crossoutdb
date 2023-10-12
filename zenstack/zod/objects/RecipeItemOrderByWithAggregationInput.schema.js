"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const RecipeItemCountOrderByAggregateInput_schema_1 = require("./RecipeItemCountOrderByAggregateInput.schema");
const RecipeItemAvgOrderByAggregateInput_schema_1 = require("./RecipeItemAvgOrderByAggregateInput.schema");
const RecipeItemMaxOrderByAggregateInput_schema_1 = require("./RecipeItemMaxOrderByAggregateInput.schema");
const RecipeItemMinOrderByAggregateInput_schema_1 = require("./RecipeItemMinOrderByAggregateInput.schema");
const RecipeItemSumOrderByAggregateInput_schema_1 = require("./RecipeItemSumOrderByAggregateInput.schema");
exports.RecipeItemOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), recipeId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => RecipeItemCountOrderByAggregateInput_schema_1.RecipeItemCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => RecipeItemAvgOrderByAggregateInput_schema_1.RecipeItemAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => RecipeItemMaxOrderByAggregateInput_schema_1.RecipeItemMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => RecipeItemMinOrderByAggregateInput_schema_1.RecipeItemMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => RecipeItemSumOrderByAggregateInput_schema_1.RecipeItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
