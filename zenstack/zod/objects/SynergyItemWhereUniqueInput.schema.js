"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemSynergyIdItemIdCompoundUniqueInput_schema_1 = require("./SynergyItemSynergyIdItemIdCompoundUniqueInput.schema");
const SynergyItemWhereInput_schema_1 = require("./SynergyItemWhereInput.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const SynergyRelationFilter_schema_1 = require("./SynergyRelationFilter.schema");
const SynergyWhereInput_schema_1 = require("./SynergyWhereInput.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.SynergyItemWhereUniqueInputObjectSchema = zod_1.z.object({
    synergyId_itemId: zod_1.z.lazy(() => SynergyItemSynergyIdItemIdCompoundUniqueInput_schema_1.SynergyItemSynergyIdItemIdCompoundUniqueInputObjectSchema).optional(), AND: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema),
        zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).array()]).optional(), synergyId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), synergy: zod_1.z.union([zod_1.z.lazy(() => SynergyRelationFilter_schema_1.SynergyRelationFilterObjectSchema),
        zod_1.z.lazy(() => SynergyWhereInput_schema_1.SynergyWhereInputObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
