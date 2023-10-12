"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateNestedManyWithoutReleaseInput_schema_1 = require("./ItemStatsCreateNestedManyWithoutReleaseInput.schema");
const RecipeCreateNestedManyWithoutReleaseInput_schema_1 = require("./RecipeCreateNestedManyWithoutReleaseInput.schema");
const PackCreateNestedManyWithoutReleaseInput_schema_1 = require("./PackCreateNestedManyWithoutReleaseInput.schema");
exports.ReleaseCreateInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), xoVersion: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), build: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), battlePass: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), url: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), startDate: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), endDate: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), itemStats: zod_1.z.lazy(() => ItemStatsCreateNestedManyWithoutReleaseInput_schema_1.ItemStatsCreateNestedManyWithoutReleaseInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeCreateNestedManyWithoutReleaseInput_schema_1.RecipeCreateNestedManyWithoutReleaseInputObjectSchema).optional(), packs: zod_1.z.lazy(() => PackCreateNestedManyWithoutReleaseInput_schema_1.PackCreateNestedManyWithoutReleaseInputObjectSchema).optional()
}).strict();
