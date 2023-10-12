"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const SynergyItemListRelationFilter_schema_1 = require("./SynergyItemListRelationFilter.schema");
exports.SynergyWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.SynergyWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), synergyItems: zod_1.z.lazy(() => SynergyItemListRelationFilter_schema_1.SynergyItemListRelationFilterObjectSchema).optional()
}).strict();
