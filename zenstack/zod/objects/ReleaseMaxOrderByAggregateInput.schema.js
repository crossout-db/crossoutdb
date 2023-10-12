"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseMaxOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ReleaseMaxOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), xoVersion: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), build: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), battlePass: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), url: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), startDate: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), endDate: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
