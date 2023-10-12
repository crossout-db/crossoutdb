"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ItemOrderByWithRelationInput_schema_1 = require("./ItemOrderByWithRelationInput.schema");
exports.BadgeExchangeOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), badges: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), item: zod_1.z.lazy(() => ItemOrderByWithRelationInput_schema_1.ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
