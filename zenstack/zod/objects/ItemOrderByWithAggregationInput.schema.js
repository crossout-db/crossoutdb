"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ItemCountOrderByAggregateInput_schema_1 = require("./ItemCountOrderByAggregateInput.schema");
const ItemAvgOrderByAggregateInput_schema_1 = require("./ItemAvgOrderByAggregateInput.schema");
const ItemMaxOrderByAggregateInput_schema_1 = require("./ItemMaxOrderByAggregateInput.schema");
const ItemMinOrderByAggregateInput_schema_1 = require("./ItemMinOrderByAggregateInput.schema");
const ItemSumOrderByAggregateInput_schema_1 = require("./ItemSumOrderByAggregateInput.schema");
exports.ItemOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), typeId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), categoryId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), factionId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), rarityId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), level: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), logId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), _count: zod_1.z.lazy(() => ItemCountOrderByAggregateInput_schema_1.ItemCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => ItemAvgOrderByAggregateInput_schema_1.ItemAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => ItemMaxOrderByAggregateInput_schema_1.ItemMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => ItemMinOrderByAggregateInput_schema_1.ItemMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => ItemSumOrderByAggregateInput_schema_1.ItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
