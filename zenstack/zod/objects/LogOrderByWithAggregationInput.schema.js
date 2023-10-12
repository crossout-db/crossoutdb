"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const LogCountOrderByAggregateInput_schema_1 = require("./LogCountOrderByAggregateInput.schema");
const LogAvgOrderByAggregateInput_schema_1 = require("./LogAvgOrderByAggregateInput.schema");
const LogMaxOrderByAggregateInput_schema_1 = require("./LogMaxOrderByAggregateInput.schema");
const LogMinOrderByAggregateInput_schema_1 = require("./LogMinOrderByAggregateInput.schema");
const LogSumOrderByAggregateInput_schema_1 = require("./LogSumOrderByAggregateInput.schema");
exports.LogOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), tableChanged: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), recordId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), record: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => LogCountOrderByAggregateInput_schema_1.LogCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => LogAvgOrderByAggregateInput_schema_1.LogAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => LogMaxOrderByAggregateInput_schema_1.LogMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => LogMinOrderByAggregateInput_schema_1.LogMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => LogSumOrderByAggregateInput_schema_1.LogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
