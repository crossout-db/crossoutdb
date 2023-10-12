"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryWhereInput_schema_1 = require("./CategoryWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const ItemListRelationFilter_schema_1 = require("./ItemListRelationFilter.schema");
exports.CategoryWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema),
        zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema),
        zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), items: zod_1.z.lazy(() => ItemListRelationFilter_schema_1.ItemListRelationFilterObjectSchema).optional()
}).strict();
