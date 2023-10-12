"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereInput_schema_1 = require("./PackItemWhereInput.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const PackRelationFilter_schema_1 = require("./PackRelationFilter.schema");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.PackItemWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema),
        zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).array()]).optional(), packId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), pack: zod_1.z.union([zod_1.z.lazy(() => PackRelationFilter_schema_1.PackRelationFilterObjectSchema),
        zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema)]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
