"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMinOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.UserMinOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), emailVerified: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), image: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();