"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const SynergyRelationFilter_schema_1 = require("./SynergyRelationFilter.schema");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.SynergyItemWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.SynergyItemWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SynergyItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.SynergyItemWhereInputObjectSchema).array()]).optional(), synergyId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), synergy: zod_1.z.union([zod_1.z.lazy(() => SynergyRelationFilter_schema_1.SynergyRelationFilterObjectSchema),
        zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
