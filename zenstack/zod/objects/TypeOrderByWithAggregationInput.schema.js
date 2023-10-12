"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const TypeCountOrderByAggregateInput_schema_1 = require("./TypeCountOrderByAggregateInput.schema");
const TypeAvgOrderByAggregateInput_schema_1 = require("./TypeAvgOrderByAggregateInput.schema");
const TypeMaxOrderByAggregateInput_schema_1 = require("./TypeMaxOrderByAggregateInput.schema");
const TypeMinOrderByAggregateInput_schema_1 = require("./TypeMinOrderByAggregateInput.schema");
const TypeSumOrderByAggregateInput_schema_1 = require("./TypeSumOrderByAggregateInput.schema");
exports.TypeOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => TypeCountOrderByAggregateInput_schema_1.TypeCountOrderByAggregateInputObjectSchema).optional(), _avg: zod_1.z.lazy(() => TypeAvgOrderByAggregateInput_schema_1.TypeAvgOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => TypeMaxOrderByAggregateInput_schema_1.TypeMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => TypeMinOrderByAggregateInput_schema_1.TypeMinOrderByAggregateInputObjectSchema).optional(), _sum: zod_1.z.lazy(() => TypeSumOrderByAggregateInput_schema_1.TypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
