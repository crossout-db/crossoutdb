"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PackOrderByWithRelationInput_schema_1 = require("./PackOrderByWithRelationInput.schema");
const ItemOrderByWithRelationInput_schema_1 = require("./ItemOrderByWithRelationInput.schema");
exports.PackItemOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), packId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), pack: zod_1.z.lazy(() => PackOrderByWithRelationInput_schema_1.PackOrderByWithRelationInputObjectSchema).optional(), item: zod_1.z.lazy(() => ItemOrderByWithRelationInput_schema_1.ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
