"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMaxOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.ItemMaxOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), marketDef: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), typeId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), categoryId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), factionId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), rarityId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), level: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyPriceMax: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), craftCost: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), logId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
