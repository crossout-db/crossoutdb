"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeWhereInput_schema_1 = require("./TypeWhereInput.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const ItemListRelationFilter_schema_1 = require("./ItemListRelationFilter.schema");
exports.TypeWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema),
        zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema),
        zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).array()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), items: zod_1.z.lazy(() => ItemListRelationFilter_schema_1.ItemListRelationFilterObjectSchema).optional()
}).strict();
