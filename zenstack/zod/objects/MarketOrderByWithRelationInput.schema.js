"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ItemOrderByWithRelationInput_schema_1 = require("./ItemOrderByWithRelationInput.schema");
exports.MarketOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), marketDef: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyPriceMax: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), item: zod_1.z.lazy(() => ItemOrderByWithRelationInput_schema_1.ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
