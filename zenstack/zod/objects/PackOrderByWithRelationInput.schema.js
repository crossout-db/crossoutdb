"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ReleaseOrderByWithRelationInput_schema_1 = require("./ReleaseOrderByWithRelationInput.schema");
const PackItemOrderByRelationAggregateInput_schema_1 = require("./PackItemOrderByRelationAggregateInput.schema");
const PackPriceOrderByRelationAggregateInput_schema_1 = require("./PackPriceOrderByRelationAggregateInput.schema");
exports.PackOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), description: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), steamAppID: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), key: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), coins: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), releaseId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), release: zod_1.z.lazy(() => ReleaseOrderByWithRelationInput_schema_1.ReleaseOrderByWithRelationInputObjectSchema).optional(), items: zod_1.z.lazy(() => PackItemOrderByRelationAggregateInput_schema_1.PackItemOrderByRelationAggregateInputObjectSchema).optional(), packPrices: zod_1.z.lazy(() => PackPriceOrderByRelationAggregateInput_schema_1.PackPriceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
