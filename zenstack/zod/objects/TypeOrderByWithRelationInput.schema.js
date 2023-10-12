"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const ItemOrderByRelationAggregateInput_schema_1 = require("./ItemOrderByRelationAggregateInput.schema");
exports.TypeOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), items: zod_1.z.lazy(() => ItemOrderByRelationAggregateInput_schema_1.ItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
