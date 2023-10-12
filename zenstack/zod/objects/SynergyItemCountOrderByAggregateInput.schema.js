"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCountOrderByAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.SynergyItemCountOrderByAggregateInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
