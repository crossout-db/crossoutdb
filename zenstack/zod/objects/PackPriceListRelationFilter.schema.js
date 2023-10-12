"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceWhereInput_schema_1 = require("./PackPriceWhereInput.schema");
exports.PackPriceListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).optional()
}).strict();
