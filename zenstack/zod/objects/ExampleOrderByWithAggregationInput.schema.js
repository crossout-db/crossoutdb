"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ExampleCountOrderByAggregateInput_schema_1 = require("./ExampleCountOrderByAggregateInput.schema");
const ExampleAvgOrderByAggregateInput_schema_1 = require("./ExampleAvgOrderByAggregateInput.schema");
const ExampleMaxOrderByAggregateInput_schema_1 = require("./ExampleMaxOrderByAggregateInput.schema");
const ExampleMinOrderByAggregateInput_schema_1 = require("./ExampleMinOrderByAggregateInput.schema");
const ExampleSumOrderByAggregateInput_schema_1 = require("./ExampleSumOrderByAggregateInput.schema");
exports.ExampleOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), createdAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), updatedAt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => ExampleCountOrderByAggregateInput_schema_1.ExampleCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => ExampleAvgOrderByAggregateInput_schema_1.ExampleAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ExampleMaxOrderByAggregateInput_schema_1.ExampleMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ExampleMinOrderByAggregateInput_schema_1.ExampleMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => ExampleSumOrderByAggregateInput_schema_1.ExampleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
