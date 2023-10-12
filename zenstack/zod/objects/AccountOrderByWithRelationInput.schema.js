"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const UserOrderByWithRelationInput_schema_1 = require("./UserOrderByWithRelationInput.schema");
exports.AccountOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), provider: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), providerAccountId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), refresh_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), access_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), expires_at: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), token_type: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), scope: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), id_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), session_state: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), user: zod_1.z.lazy(() => UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
