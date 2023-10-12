"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackArgs_schema_1 = require("./PackArgs.schema");
exports.PackPriceIncludeObjectSchema = zod_1.z.object({
    pack: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackArgs_schema_1.PackArgsObjectSchema)]).optional()
}).strict();
