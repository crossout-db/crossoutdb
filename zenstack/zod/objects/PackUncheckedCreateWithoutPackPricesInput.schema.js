"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackUncheckedCreateWithoutPackPricesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackItemUncheckedCreateNestedManyWithoutPackInput_schema_1 = require("./PackItemUncheckedCreateNestedManyWithoutPackInput.schema");
exports.PackUncheckedCreateWithoutPackPricesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.number(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.number(), releaseId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), items: zod_1.z.lazy(() => PackItemUncheckedCreateNestedManyWithoutPackInput_schema_1.PackItemUncheckedCreateNestedManyWithoutPackInputObjectSchema).optional()
}).strict();
