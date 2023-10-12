"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SynergyItemCountOrderByAggregateInput_schema_1 = require("./SynergyItemCountOrderByAggregateInput.schema");
const SynergyItemAvgOrderByAggregateInput_schema_1 = require("./SynergyItemAvgOrderByAggregateInput.schema");
const SynergyItemMaxOrderByAggregateInput_schema_1 = require("./SynergyItemMaxOrderByAggregateInput.schema");
const SynergyItemMinOrderByAggregateInput_schema_1 = require("./SynergyItemMinOrderByAggregateInput.schema");
const SynergyItemSumOrderByAggregateInput_schema_1 = require("./SynergyItemSumOrderByAggregateInput.schema");
exports.SynergyItemOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => SynergyItemCountOrderByAggregateInput_schema_1.SynergyItemCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => SynergyItemAvgOrderByAggregateInput_schema_1.SynergyItemAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => SynergyItemMaxOrderByAggregateInput_schema_1.SynergyItemMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => SynergyItemMinOrderByAggregateInput_schema_1.SynergyItemMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => SynergyItemSumOrderByAggregateInput_schema_1.SynergyItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
