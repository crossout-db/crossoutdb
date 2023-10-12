"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityWhereInput_schema_1 = require("./RarityWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const ItemListRelationFilter_schema_1 = require("./ItemListRelationFilter.schema");
exports.RarityWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema),
        zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema),
        zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), order: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), primaryColor: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), secondaryColor: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), items: zod_1.z.lazy(() => ItemListRelationFilter_schema_1.ItemListRelationFilterObjectSchema).optional()
}).strict();
