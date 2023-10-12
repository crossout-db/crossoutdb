"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ItemStatsOrderByRelationAggregateInput_schema_1 = require("./ItemStatsOrderByRelationAggregateInput.schema");
const RecipeOrderByRelationAggregateInput_schema_1 = require("./RecipeOrderByRelationAggregateInput.schema");
const PackOrderByRelationAggregateInput_schema_1 = require("./PackOrderByRelationAggregateInput.schema");
exports.ReleaseOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), xoVersion: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), build: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), battlePass: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), url: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), startDate: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), endDate: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsOrderByRelationAggregateInput_schema_1.ItemStatsOrderByRelationAggregateInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeOrderByRelationAggregateInput_schema_1.RecipeOrderByRelationAggregateInputObjectSchema).optional(), packs: zod_1.z.lazy(() => PackOrderByRelationAggregateInput_schema_1.PackOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
