"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.ItemRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema).optional()
}).strict();
