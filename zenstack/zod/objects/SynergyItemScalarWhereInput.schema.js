"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemScalarWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
exports.SynergyItemScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.SynergyItemScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemScalarWhereInputObjectSchema).array()]).optional(), synergyId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional()
}).strict();
