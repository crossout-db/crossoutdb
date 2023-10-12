"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenOrderByWithAggregationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const VerificationTokenCountOrderByAggregateInput_schema_1 = require("./VerificationTokenCountOrderByAggregateInput.schema");
const VerificationTokenMaxOrderByAggregateInput_schema_1 = require("./VerificationTokenMaxOrderByAggregateInput.schema");
const VerificationTokenMinOrderByAggregateInput_schema_1 = require("./VerificationTokenMinOrderByAggregateInput.schema");
exports.VerificationTokenOrderByWithAggregationInputObjectSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), expires: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), _count: zod_1.z.lazy(() => VerificationTokenCountOrderByAggregateInput_schema_1.VerificationTokenCountOrderByAggregateInputObjectSchema).optional(), _max: zod_1.z.lazy(() => VerificationTokenMaxOrderByAggregateInput_schema_1.VerificationTokenMaxOrderByAggregateInputObjectSchema).optional(), _min: zod_1.z.lazy(() => VerificationTokenMinOrderByAggregateInput_schema_1.VerificationTokenMinOrderByAggregateInputObjectSchema).optional()
}).strict();
