"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketAvgOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.MarketAvgOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyPriceMax: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), craftCost: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
