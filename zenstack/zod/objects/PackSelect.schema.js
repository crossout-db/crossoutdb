"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseArgs_schema_1 = require("./ReleaseArgs.schema");
const PackItemInput_schema_1 = require("../input/PackItemInput.schema");
const PackPriceInput_schema_1 = require("../input/PackPriceInput.schema");
const PackCountOutputTypeArgs_schema_1 = require("./PackCountOutputTypeArgs.schema");
exports.PackSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), description: zod_1.z.boolean().optional(), steamAppID: zod_1.z.boolean().optional(), key: zod_1.z.boolean().optional(), coins: zod_1.z.boolean().optional(), release: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseArgs_schema_1.ReleaseArgsObjectSchema)]).optional(), releaseId: zod_1.z.boolean().optional(), active: zod_1.z.boolean().optional(), items: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackItemInput_schema_1.PackItemInputSchema.findMany)]).optional(), packPrices: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackPriceInput_schema_1.PackPriceInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackCountOutputTypeArgs_schema_1.PackCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
