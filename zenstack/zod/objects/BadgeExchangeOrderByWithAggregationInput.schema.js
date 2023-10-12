"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const BadgeExchangeCountOrderByAggregateInput_schema_1 = require("./BadgeExchangeCountOrderByAggregateInput.schema");
const BadgeExchangeAvgOrderByAggregateInput_schema_1 = require("./BadgeExchangeAvgOrderByAggregateInput.schema");
const BadgeExchangeMaxOrderByAggregateInput_schema_1 = require("./BadgeExchangeMaxOrderByAggregateInput.schema");
const BadgeExchangeMinOrderByAggregateInput_schema_1 = require("./BadgeExchangeMinOrderByAggregateInput.schema");
const BadgeExchangeSumOrderByAggregateInput_schema_1 = require("./BadgeExchangeSumOrderByAggregateInput.schema");
exports.BadgeExchangeOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), itemId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), badges: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), timestamp: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => BadgeExchangeCountOrderByAggregateInput_schema_1.BadgeExchangeCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => BadgeExchangeAvgOrderByAggregateInput_schema_1.BadgeExchangeAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => BadgeExchangeMaxOrderByAggregateInput_schema_1.BadgeExchangeMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => BadgeExchangeMinOrderByAggregateInput_schema_1.BadgeExchangeMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => BadgeExchangeSumOrderByAggregateInput_schema_1.BadgeExchangeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
