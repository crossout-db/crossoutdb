"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMaxOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.VerificationTokenMaxOrderByAggregateInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expires: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
