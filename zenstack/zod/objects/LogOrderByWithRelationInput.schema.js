"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const UserOrderByWithRelationInput_schema_1 = require("./UserOrderByWithRelationInput.schema");
exports.LogOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), tableChanged: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), recordId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), record: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), user: zod_1.z.lazy(() => UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
