"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const RecipeCountOrderByAggregateInput_schema_1 = require("./RecipeCountOrderByAggregateInput.schema");
const RecipeAvgOrderByAggregateInput_schema_1 = require("./RecipeAvgOrderByAggregateInput.schema");
const RecipeMaxOrderByAggregateInput_schema_1 = require("./RecipeMaxOrderByAggregateInput.schema");
const RecipeMinOrderByAggregateInput_schema_1 = require("./RecipeMinOrderByAggregateInput.schema");
const RecipeSumOrderByAggregateInput_schema_1 = require("./RecipeSumOrderByAggregateInput.schema");
exports.RecipeOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), resultItemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => RecipeCountOrderByAggregateInput_schema_1.RecipeCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => RecipeAvgOrderByAggregateInput_schema_1.RecipeAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => RecipeMaxOrderByAggregateInput_schema_1.RecipeMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => RecipeMinOrderByAggregateInput_schema_1.RecipeMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => RecipeSumOrderByAggregateInput_schema_1.RecipeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
