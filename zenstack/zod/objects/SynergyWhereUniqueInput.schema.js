"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const SynergyItemListRelationFilter_schema_1 = require("./SynergyItemListRelationFilter.schema");
exports.SynergyWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), synergyItems: zod_1.z.lazy(() => SynergyItemListRelationFilter_schema_1.SynergyItemListRelationFilterObjectSchema).optional()
}).strict();
