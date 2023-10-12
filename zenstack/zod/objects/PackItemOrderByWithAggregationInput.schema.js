"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PackItemCountOrderByAggregateInput_schema_1 = require("./PackItemCountOrderByAggregateInput.schema");
const PackItemAvgOrderByAggregateInput_schema_1 = require("./PackItemAvgOrderByAggregateInput.schema");
const PackItemMaxOrderByAggregateInput_schema_1 = require("./PackItemMaxOrderByAggregateInput.schema");
const PackItemMinOrderByAggregateInput_schema_1 = require("./PackItemMinOrderByAggregateInput.schema");
const PackItemSumOrderByAggregateInput_schema_1 = require("./PackItemSumOrderByAggregateInput.schema");
exports.PackItemOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), packId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => PackItemCountOrderByAggregateInput_schema_1.PackItemCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => PackItemAvgOrderByAggregateInput_schema_1.PackItemAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => PackItemMaxOrderByAggregateInput_schema_1.PackItemMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => PackItemMinOrderByAggregateInput_schema_1.PackItemMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => PackItemSumOrderByAggregateInput_schema_1.PackItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
