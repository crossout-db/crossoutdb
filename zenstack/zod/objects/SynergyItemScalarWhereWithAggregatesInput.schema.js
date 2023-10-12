"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), synergyId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema),
        zod_1.z.number()]).optional()
}).strict();
