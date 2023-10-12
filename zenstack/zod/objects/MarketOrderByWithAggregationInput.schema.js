"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const MarketCountOrderByAggregateInput_schema_1 = require("./MarketCountOrderByAggregateInput.schema");
const MarketAvgOrderByAggregateInput_schema_1 = require("./MarketAvgOrderByAggregateInput.schema");
const MarketMaxOrderByAggregateInput_schema_1 = require("./MarketMaxOrderByAggregateInput.schema");
const MarketMinOrderByAggregateInput_schema_1 = require("./MarketMinOrderByAggregateInput.schema");
const MarketSumOrderByAggregateInput_schema_1 = require("./MarketSumOrderByAggregateInput.schema");
exports.MarketOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), marketDef: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyPriceMax: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), buyOrders: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => MarketCountOrderByAggregateInput_schema_1.MarketCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => MarketAvgOrderByAggregateInput_schema_1.MarketAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => MarketMaxOrderByAggregateInput_schema_1.MarketMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => MarketMinOrderByAggregateInput_schema_1.MarketMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => MarketSumOrderByAggregateInput_schema_1.MarketSumOrderByAggregateInputObjectSchema).optional()
}).strict();
