"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateWithoutReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemCreateNestedManyWithoutPackInput_schema_1 = require("./PackItemCreateNestedManyWithoutPackInput.schema");
const PackPriceCreateNestedManyWithoutPackInput_schema_1 = require("./PackPriceCreateNestedManyWithoutPackInput.schema");
exports.PackCreateWithoutReleaseInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.number(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.number(), active: zod_1.z.boolean(), items: zod_1.z.lazy(() => PackItemCreateNestedManyWithoutPackInput_schema_1.PackItemCreateNestedManyWithoutPackInputObjectSchema).optional(), packPrices: zod_1.z.lazy(() => PackPriceCreateNestedManyWithoutPackInput_schema_1.PackPriceCreateNestedManyWithoutPackInputObjectSchema).optional()
}).strict();
