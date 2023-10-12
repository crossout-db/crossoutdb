"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemScalarWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
exports.PackItemScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.PackItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PackItemScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.PackItemScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.PackItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.PackItemScalarWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), packId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional()
}).strict();