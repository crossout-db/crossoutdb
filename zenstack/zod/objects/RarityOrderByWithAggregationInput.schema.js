"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const RarityCountOrderByAggregateInput_schema_1 = require("./RarityCountOrderByAggregateInput.schema");
const RarityAvgOrderByAggregateInput_schema_1 = require("./RarityAvgOrderByAggregateInput.schema");
const RarityMaxOrderByAggregateInput_schema_1 = require("./RarityMaxOrderByAggregateInput.schema");
const RarityMinOrderByAggregateInput_schema_1 = require("./RarityMinOrderByAggregateInput.schema");
const RaritySumOrderByAggregateInput_schema_1 = require("./RaritySumOrderByAggregateInput.schema");
exports.RarityOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), order: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), primaryColor: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), secondaryColor: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => RarityCountOrderByAggregateInput_schema_1.RarityCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => RarityAvgOrderByAggregateInput_schema_1.RarityAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => RarityMaxOrderByAggregateInput_schema_1.RarityMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => RarityMinOrderByAggregateInput_schema_1.RarityMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => RaritySumOrderByAggregateInput_schema_1.RaritySumOrderByAggregateInputObjectSchema).optional()
}).strict();
