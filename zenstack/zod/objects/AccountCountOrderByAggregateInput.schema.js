"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCountOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.AccountCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), provider: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), providerAccountId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), refresh_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), access_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expires_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), token_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), scope: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), id_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), session_state: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
