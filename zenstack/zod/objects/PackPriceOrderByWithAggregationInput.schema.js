"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PackPriceCountOrderByAggregateInput_schema_1 = require("./PackPriceCountOrderByAggregateInput.schema");
const PackPriceAvgOrderByAggregateInput_schema_1 = require("./PackPriceAvgOrderByAggregateInput.schema");
const PackPriceMaxOrderByAggregateInput_schema_1 = require("./PackPriceMaxOrderByAggregateInput.schema");
const PackPriceMinOrderByAggregateInput_schema_1 = require("./PackPriceMinOrderByAggregateInput.schema");
const PackPriceSumOrderByAggregateInput_schema_1 = require("./PackPriceSumOrderByAggregateInput.schema");
exports.PackPriceOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), packId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceUSD: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceEUR: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceGBP: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), priceRUB: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), discount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => PackPriceCountOrderByAggregateInput_schema_1.PackPriceCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => PackPriceAvgOrderByAggregateInput_schema_1.PackPriceAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => PackPriceMaxOrderByAggregateInput_schema_1.PackPriceMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => PackPriceMinOrderByAggregateInput_schema_1.PackPriceMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => PackPriceSumOrderByAggregateInput_schema_1.PackPriceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
