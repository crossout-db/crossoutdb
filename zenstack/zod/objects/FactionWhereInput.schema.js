"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const ItemListRelationFilter_schema_1 = require("./ItemListRelationFilter.schema");
exports.FactionWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.FactionWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.FactionWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.FactionWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.FactionWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.FactionWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), items: zod_1.z.lazy(() => ItemListRelationFilter_schema_1.ItemListRelationFilterObjectSchema).optional()
}).strict();
