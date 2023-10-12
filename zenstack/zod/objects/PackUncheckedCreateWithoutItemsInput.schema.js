"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUncheckedCreateWithoutItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceUncheckedCreateNestedManyWithoutPackInput_schema_1 = require("./PackPriceUncheckedCreateNestedManyWithoutPackInput.schema");
exports.PackUncheckedCreateWithoutItemsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.number(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.number(), releaseId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), packPrices: zod_1.z.lazy(() => PackPriceUncheckedCreateNestedManyWithoutPackInput_schema_1.PackPriceUncheckedCreateNestedManyWithoutPackInputObjectSchema).optional()
}).strict();