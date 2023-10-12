"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
