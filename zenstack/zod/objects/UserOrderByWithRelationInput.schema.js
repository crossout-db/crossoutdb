"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const AccountOrderByRelationAggregateInput_schema_1 = require("./AccountOrderByRelationAggregateInput.schema");
const SessionOrderByRelationAggregateInput_schema_1 = require("./SessionOrderByRelationAggregateInput.schema");
const ItemStatsOrderByRelationAggregateInput_schema_1 = require("./ItemStatsOrderByRelationAggregateInput.schema");
const LogOrderByRelationAggregateInput_schema_1 = require("./LogOrderByRelationAggregateInput.schema");
exports.UserOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), role: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), email: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), emailVerified: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), image: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), accounts: zod_1.z.lazy(() => AccountOrderByRelationAggregateInput_schema_1.AccountOrderByRelationAggregateInputObjectSchema).optional(), sessions: zod_1.z.lazy(() => SessionOrderByRelationAggregateInput_schema_1.SessionOrderByRelationAggregateInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsOrderByRelationAggregateInput_schema_1.ItemStatsOrderByRelationAggregateInputObjectSchema).optional(), log: zod_1.z.lazy(() => LogOrderByRelationAggregateInput_schema_1.LogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
