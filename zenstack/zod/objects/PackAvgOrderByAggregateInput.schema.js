"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackAvgOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PackAvgOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), steamAppID: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), coins: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
