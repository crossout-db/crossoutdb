"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceSelect_schema_1 = require("./PackPriceSelect.schema");
const PackPriceInclude_schema_1 = require("./PackPriceInclude.schema");
exports.PackPriceArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema).optional(), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema).optional()
}).strict();
