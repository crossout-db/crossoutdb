"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const CategoryCountOrderByAggregateInput_schema_1 = require("./CategoryCountOrderByAggregateInput.schema");
const CategoryAvgOrderByAggregateInput_schema_1 = require("./CategoryAvgOrderByAggregateInput.schema");
const CategoryMaxOrderByAggregateInput_schema_1 = require("./CategoryMaxOrderByAggregateInput.schema");
const CategoryMinOrderByAggregateInput_schema_1 = require("./CategoryMinOrderByAggregateInput.schema");
const CategorySumOrderByAggregateInput_schema_1 = require("./CategorySumOrderByAggregateInput.schema");
exports.CategoryOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => CategoryCountOrderByAggregateInput_schema_1.CategoryCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => CategoryAvgOrderByAggregateInput_schema_1.CategoryAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => CategoryMaxOrderByAggregateInput_schema_1.CategoryMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => CategoryMinOrderByAggregateInput_schema_1.CategoryMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => CategorySumOrderByAggregateInput_schema_1.CategorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
