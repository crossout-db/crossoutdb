"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const PackCountOrderByAggregateInput_schema_1 = require("./PackCountOrderByAggregateInput.schema");
const PackAvgOrderByAggregateInput_schema_1 = require("./PackAvgOrderByAggregateInput.schema");
const PackMaxOrderByAggregateInput_schema_1 = require("./PackMaxOrderByAggregateInput.schema");
const PackMinOrderByAggregateInput_schema_1 = require("./PackMinOrderByAggregateInput.schema");
const PackSumOrderByAggregateInput_schema_1 = require("./PackSumOrderByAggregateInput.schema");
exports.PackOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), steamAppID: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), key: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), coins: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => PackCountOrderByAggregateInput_schema_1.PackCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => PackAvgOrderByAggregateInput_schema_1.PackAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => PackMaxOrderByAggregateInput_schema_1.PackMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => PackMinOrderByAggregateInput_schema_1.PackMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => PackSumOrderByAggregateInput_schema_1.PackSumOrderByAggregateInputObjectSchema).optional()
}).strict();
