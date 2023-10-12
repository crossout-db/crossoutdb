"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ReleaseCountOrderByAggregateInput_schema_1 = require("./ReleaseCountOrderByAggregateInput.schema");
const ReleaseAvgOrderByAggregateInput_schema_1 = require("./ReleaseAvgOrderByAggregateInput.schema");
const ReleaseMaxOrderByAggregateInput_schema_1 = require("./ReleaseMaxOrderByAggregateInput.schema");
const ReleaseMinOrderByAggregateInput_schema_1 = require("./ReleaseMinOrderByAggregateInput.schema");
const ReleaseSumOrderByAggregateInput_schema_1 = require("./ReleaseSumOrderByAggregateInput.schema");
exports.ReleaseOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), xoVersion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), build: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), battlePass: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), url: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), startDate: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), endDate: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => ReleaseCountOrderByAggregateInput_schema_1.ReleaseCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => ReleaseAvgOrderByAggregateInput_schema_1.ReleaseAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ReleaseMaxOrderByAggregateInput_schema_1.ReleaseMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ReleaseMinOrderByAggregateInput_schema_1.ReleaseMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => ReleaseSumOrderByAggregateInput_schema_1.ReleaseSumOrderByAggregateInputObjectSchema).optional()
}).strict();
