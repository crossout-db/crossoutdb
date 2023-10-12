"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SynergyItemOrderByRelationAggregateInput_schema_1 = require("./SynergyItemOrderByRelationAggregateInput.schema");
exports.SynergyOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), synergyItems: zod_1.z.lazy(() => SynergyItemOrderByRelationAggregateInput_schema_1.SynergyItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
