"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SynergyOrderByWithRelationInput_schema_1 = require("./SynergyOrderByWithRelationInput.schema");
const ItemOrderByWithRelationInput_schema_1 = require("./ItemOrderByWithRelationInput.schema");
exports.SynergyItemOrderByWithRelationInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), synergy: zod_1.z.lazy(() => SynergyOrderByWithRelationInput_schema_1.SynergyOrderByWithRelationInputObjectSchema).optional(), item: zod_1.z.lazy(() => ItemOrderByWithRelationInput_schema_1.ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
