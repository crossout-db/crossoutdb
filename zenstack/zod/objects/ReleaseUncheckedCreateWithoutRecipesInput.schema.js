"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsUncheckedCreateNestedManyWithoutReleaseInput_schema_1 = require("./ItemStatsUncheckedCreateNestedManyWithoutReleaseInput.schema");
const PackUncheckedCreateNestedManyWithoutReleaseInput_schema_1 = require("./PackUncheckedCreateNestedManyWithoutReleaseInput.schema");
exports.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), xoVersion: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), build: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), battlePass: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), url: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), startDate: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), endDate: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedCreateNestedManyWithoutReleaseInput_schema_1.ItemStatsUncheckedCreateNestedManyWithoutReleaseInputObjectSchema).optional(), packs: zod_1.z.lazy(() => PackUncheckedCreateNestedManyWithoutReleaseInput_schema_1.PackUncheckedCreateNestedManyWithoutReleaseInputObjectSchema).optional()
}).strict();
