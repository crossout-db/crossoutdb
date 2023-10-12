"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SynergyCountOrderByAggregateInput_schema_1 = require("./SynergyCountOrderByAggregateInput.schema");
const SynergyAvgOrderByAggregateInput_schema_1 = require("./SynergyAvgOrderByAggregateInput.schema");
const SynergyMaxOrderByAggregateInput_schema_1 = require("./SynergyMaxOrderByAggregateInput.schema");
const SynergyMinOrderByAggregateInput_schema_1 = require("./SynergyMinOrderByAggregateInput.schema");
const SynergySumOrderByAggregateInput_schema_1 = require("./SynergySumOrderByAggregateInput.schema");
exports.SynergyOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => SynergyCountOrderByAggregateInput_schema_1.SynergyCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => SynergyAvgOrderByAggregateInput_schema_1.SynergyAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => SynergyMaxOrderByAggregateInput_schema_1.SynergyMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => SynergyMinOrderByAggregateInput_schema_1.SynergyMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => SynergySumOrderByAggregateInput_schema_1.SynergySumOrderByAggregateInputObjectSchema).optional()
}).strict();
