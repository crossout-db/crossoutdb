"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const AccountCountOrderByAggregateInput_schema_1 = require("./AccountCountOrderByAggregateInput.schema");
const AccountAvgOrderByAggregateInput_schema_1 = require("./AccountAvgOrderByAggregateInput.schema");
const AccountMaxOrderByAggregateInput_schema_1 = require("./AccountMaxOrderByAggregateInput.schema");
const AccountMinOrderByAggregateInput_schema_1 = require("./AccountMinOrderByAggregateInput.schema");
const AccountSumOrderByAggregateInput_schema_1 = require("./AccountSumOrderByAggregateInput.schema");
exports.AccountOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), userId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), provider: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), providerAccountId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), refresh_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), access_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), expires_at: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), token_type: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), scope: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), id_token: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), session_state: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => AccountCountOrderByAggregateInput_schema_1.AccountCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => AccountAvgOrderByAggregateInput_schema_1.AccountAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => AccountMaxOrderByAggregateInput_schema_1.AccountMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => AccountMinOrderByAggregateInput_schema_1.AccountMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => AccountSumOrderByAggregateInput_schema_1.AccountSumOrderByAggregateInputObjectSchema).optional()
}).strict();
