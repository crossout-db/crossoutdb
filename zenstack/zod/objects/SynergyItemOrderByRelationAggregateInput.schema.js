"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemOrderByRelationAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
exports.SynergyItemOrderByRelationAggregateInputObjectSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional()
}).strict();
