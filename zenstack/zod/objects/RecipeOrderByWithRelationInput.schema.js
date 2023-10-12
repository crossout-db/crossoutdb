"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ItemOrderByWithRelationInput_schema_1 = require("./ItemOrderByWithRelationInput.schema");
const ReleaseOrderByWithRelationInput_schema_1 = require("./ReleaseOrderByWithRelationInput.schema");
const RecipeItemOrderByRelationAggregateInput_schema_1 = require("./RecipeItemOrderByRelationAggregateInput.schema");
exports.RecipeOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), resultItemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), result: zod_1.z.lazy(() => ItemOrderByWithRelationInput_schema_1.ItemOrderByWithRelationInputObjectSchema).optional(), release: zod_1.z.lazy(() => ReleaseOrderByWithRelationInput_schema_1.ReleaseOrderByWithRelationInputObjectSchema).optional(), ingredients: zod_1.z.lazy(() => RecipeItemOrderByRelationAggregateInput_schema_1.RecipeItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
