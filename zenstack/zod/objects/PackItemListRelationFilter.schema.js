"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemWhereInput_schema_1 = require("./PackItemWhereInput.schema");
exports.PackItemListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => PackItemWhereInput_schema_1.PackItemWhereInputObjectSchema).optional()
}).strict();
