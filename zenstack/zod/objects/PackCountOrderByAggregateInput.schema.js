"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCountOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PackCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), steamAppID: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), coins: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
