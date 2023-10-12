"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceMaxOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.PackPriceMaxOrderByAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), packId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceUSD: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceEUR: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceGBP: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceRUB: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), discount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
