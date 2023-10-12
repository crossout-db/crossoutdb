"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
const PackItemInput_schema_1 = require("../input/PackItemInput.schema");
const PackPriceInput_schema_1 = require("../input/PackPriceInput.schema");
const PackCountOutputTypeArgs_schema_1 = require("./PackCountOutputTypeArgs.schema");
exports.PackIncludeObjectSchema = zod_1.z.object({
    release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional(), items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackItemInput_schema_1.PackItemInputSchema.findMany)]).optional(), packPrices: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackPriceInput_schema_1.PackPriceInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackCountOutputTypeArgs_schema_1.PackCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
