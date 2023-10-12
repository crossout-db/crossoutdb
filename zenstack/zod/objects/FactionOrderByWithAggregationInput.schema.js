"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const FactionCountOrderByAggregateInput_schema_1 = require("./FactionCountOrderByAggregateInput.schema");
const FactionAvgOrderByAggregateInput_schema_1 = require("./FactionAvgOrderByAggregateInput.schema");
const FactionMaxOrderByAggregateInput_schema_1 = require("./FactionMaxOrderByAggregateInput.schema");
const FactionMinOrderByAggregateInput_schema_1 = require("./FactionMinOrderByAggregateInput.schema");
const FactionSumOrderByAggregateInput_schema_1 = require("./FactionSumOrderByAggregateInput.schema");
exports.FactionOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => FactionCountOrderByAggregateInput_schema_1.FactionCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => FactionAvgOrderByAggregateInput_schema_1.FactionAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => FactionMaxOrderByAggregateInput_schema_1.FactionMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => FactionMinOrderByAggregateInput_schema_1.FactionMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => FactionSumOrderByAggregateInput_schema_1.FactionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
